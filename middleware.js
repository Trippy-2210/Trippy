import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request, res) {
  const requestHeaders = new Headers(request.headers);
  const authed = true;
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  if (!authed && !pathname.startsWith('/login') && !pathname.startsWith('/_next')) {
    url.pathname = '/login';
    let response = NextResponse.redirect(url);
    response.cookies.set('logged', 'no');
    return response;
  } else {
    requestHeaders.set('userid', '2');
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