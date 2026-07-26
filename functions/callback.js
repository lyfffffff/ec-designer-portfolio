// GitHub OAuth 代理 - 处理授权回调
// GitHub 回调到 /callback，用 code 换 access_token
// 按 Decap CMS 的三阶段握手协议通过 postMessage 把 token 传回 CMS：
//   1. 先发 "authorizing:github"（targetOrigin: *，此时不知 CMS origin）
//   2. 等待 CMS 回发 acknowledgment（携带 CMS origin）
//   3. 发 "authorization:github:success:{token,provider}"（targetOrigin: CMS origin）

export async function onRequest(context) {
  const { request, env } = context
  const url = new URL(request.url)
  const code = url.searchParams.get('code')

  if (!code) {
    return new Response('Missing code parameter', { status: 400 })
  }

  // 用授权码换取 access token
  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
    }),
  })

  const data = await tokenRes.json()

  if (data.error || !data.access_token) {
    return new Response(
      'Authentication failed: ' +
        (data.error_description || data.error || 'no token returned'),
      { status: 401 },
    )
  }

  // JSON.stringify 转义 token，安全嵌入 JS 字符串字面量
  const safeToken = JSON.stringify(data.access_token)

  const html = `<!doctype html>
<html>
<body>
<script>
  (function () {
    var provider = 'github';
    var content = JSON.stringify({ token: ${safeToken}, provider: provider });

    // 第一阶段：通知 CMS 开始授权流程
    window.opener.postMessage('authorizing:' + provider, '*');

    // 第二阶段：等待 CMS 回发确认；第三阶段：发送 token
    function onAck(e) {
      window.opener.postMessage(
        'authorization:' + provider + ':success:' + content,
        e.origin
      );
      window.removeEventListener('message', onAck);
      window.close();
    }
    window.addEventListener('message', onAck);
  })();
<\/script>
</body>
</html>`

  return new Response(html, { headers: { 'Content-Type': 'text/html' } })
}
