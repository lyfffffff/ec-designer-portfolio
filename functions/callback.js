// GitHub OAuth 代理 - 处理授权回调
// GitHub 回调到 /callback，用 code 换 access_token，通过 postMessage 回传给 CMS

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

  // 通过 postMessage 把 token 传回 CMS 弹窗的父窗口，然后关闭弹窗
  // JSON.stringify 转义 token，避免注入
  const token = JSON.stringify(data.access_token)
  const html = `<!doctype html>
<html>
<body>
<script>
  (function () {
    var msg = JSON.stringify({ token: ${token}, provider: 'github' });
    window.opener.postMessage(msg, window.opener.location.origin);
    window.close();
  })();
<\/script>
</body>
</html>`

  return new Response(html, { headers: { 'Content-Type': 'text/html' } })
}
