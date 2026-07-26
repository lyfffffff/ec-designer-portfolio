// GitHub OAuth 代理 - 发起授权
// CMS 登录时访问 {base_url}/auth，重定向到 GitHub 授权页

export async function onRequest(context) {
  const { request, env } = context
  const origin = new URL(request.url).origin
  const state = Math.random().toString(36).slice(2)
  const redirectUri = `${origin}/callback`

  const params = new URLSearchParams({
    client_id: env.GITHUB_CLIENT_ID,
    redirect_uri: redirectUri,
    scope: 'repo,user',
    state,
  })

  return Response.redirect(
    `https://github.com/login/oauth/authorize?${params.toString()}`,
    302,
  )
}
