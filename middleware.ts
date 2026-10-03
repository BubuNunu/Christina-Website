// Vercel Routing Middleware: asks visitors for a password before any page,
// picture or video is sent.

import { next } from '@vercel/functions';

const cookieName = 'site_auth';
const loginPath = '/__login';

// sha256('ruishidesign:' + password). Change the password by setting
// SITE_PASSWORD in Vercel's project settings, or by replacing this hash.
const defaultPasswordHash = 'c3916b3d40357631739e7bb9961163e4f2c0f81c116962265a2c70a5bd40b21d';

export const config = {
  // Every path, including /images and /assets
  matcher: '/:path*',
};

const sha256 = async (text: string) => {
  const data = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash), (b) => b.toString(16).padStart(2, '0')).join('');
};

// The cookie holds a hash of the password, so changing the password logs everyone out.
const tokenFor = (password: string) => sha256(`ruishidesign:${password}`);

const readCookie = (request: Request, name: string) => {
  const header = request.headers.get('cookie') || '';
  const match = header.split(/;\s*/).find((part) => part.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : undefined;
};

const safeNext = (value: unknown) =>
  typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') ? value : '/';

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const loginPage = (next: string, wrong: boolean) => `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="theme-color" content="#000000" />
<meta name="robots" content="noindex" />
<title>Rui Shi - Product Designer</title>
<style>
  * { box-sizing: border-box; }
  body { margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center;
    padding: 16px; background: #000; color: #fff;
    font-family: "Manrope", "Helvetica", "Arial", sans-serif; }
  form { width: 100%; max-width: 320px; padding: 32px; border-radius: 24px; background: #111;
    border: 1px solid rgba(255,255,255,0.2); text-align: center; }
  p { margin: 12px 0 24px; font-size: 14px; line-height: 20px; color: rgba(255,255,255,0.8); }
  input, button { width: 100%; height: 40px; border-radius: 8px; font: inherit; font-size: 14px; }
  input { padding: 0 12px; text-align: center; color: #fff; background: #343434;
    border: 1px solid ${wrong ? '#f28b82' : 'transparent'}; outline: none; }
  input:focus { border-color: ${wrong ? '#f28b82' : '#aca0f5'}; }
  .error { margin: 8px 0 0; font-size: 13px; color: #f28b82; }
  button { margin-top: 12px; border: 0; cursor: pointer; font-weight: 600; color: #000; background: #aca0f5; }
</style>
</head>
<body>
<form method="POST" action="${loginPath}">
  <svg width="16" height="18" viewBox="0 0 16 18" aria-hidden="true"><path fill="#fff" d="M8 0a5 5 0 0 0-5 5v2.1A3 3 0 0 0 1 10v5a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-5a3 3 0 0 0-2-2.9V5a5 5 0 0 0-5-5Zm3 7H5V5a3 3 0 1 1 6 0v2Z"/></svg>
  <p>Enter password<br />to access the site.</p>
  <input type="password" name="password" aria-label="Password" autofocus required />
  ${wrong ? '<div class="error" role="alert">Wrong password, try again.</div>' : ''}
  <input type="hidden" name="next" value="${escapeHtml(next)}" />
  <button type="submit">Submit</button>
</form>
</body>
</html>`;

const htmlResponse = (body: string, status: number) =>
  new Response(body, {
    status,
    headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' },
  });

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const envPassword = process.env.SITE_PASSWORD;
  const expected = envPassword ? await tokenFor(envPassword) : defaultPasswordHash;

  if (url.pathname === loginPath && request.method === 'POST') {
    const form = await request.formData();
    const next = safeNext(form.get('next'));
    const given = form.get('password');
    if (typeof given !== 'string' || (await tokenFor(given)) !== expected) return htmlResponse(loginPage(next, true), 401);
    return new Response(null, {
      status: 303,
      headers: {
        location: next,
        'set-cookie': `${cookieName}=${expected}; Path=/; Max-Age=2592000; HttpOnly; Secure; SameSite=Lax`,
        'cache-control': 'no-store',
      },
    });
  }

  if (readCookie(request, cookieName) === expected) return next(); // Unlocked: carry on

  return htmlResponse(loginPage(url.pathname === loginPath ? '/' : url.pathname + url.search, false), 401);
}
