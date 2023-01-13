import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request, res) {
  const requestHeaders = new Headers(request.headers);
  const authed = true;
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  if (!authed && !pathname.startsWith('/login') && !pathname.startsWith('/_next')) {
    url.pathname = '/login';
    return NextResponse.redirect(url)
  } else {
    requestHeaders.set('userId', '1337');
    return NextResponse.next({
      request: {
        headers: requestHeaders
      }
    });
  }
}

// export const config = {
//   matcher: [
//     '/:path*'
//   ],
// }