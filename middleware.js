import { NextResponse } from 'next/server';
// import schemas from './utils/db.js';

// This function can be marked `async` if using `await` inside
export async function middleware(req, res) {

  const requestHeaders = new Headers(req.headers);
  let authed = false;
  const url = req.nextUrl.clone();
  const pathname = url.pathname;
  let session_id = req.cookies.get('session_id') ? req.cookies.get('session_id').value : crypto.randomUUID();

  if (!req.cookies.get('session_id')) {
    url.pathname = '/users/login';
    let response = NextResponse.redirect(url);
    response.cookies.set('session_id', session_id);
    return response;
  }

  const fetcher = await fetch(`http://localhost:3000/api/auth/${session_id}`);
  const result = await fetcher.json();

  if (result.user_id) {
    authed = true;
  }

  if (authed && (pathname.startsWith('/users/login') || pathname.startsWith('/users/signup') || url.pathname === '/')) {
    url.pathname = '/trips';
    let response = NextResponse.redirect(url);
    return response;
  }

  if (!authed && !pathname.startsWith('/users/login') && !pathname.startsWith('/users/signup') && !pathname.startsWith('/_next') && !pathname.startsWith('/api/auth')) {
    url.pathname = '/users/login';
    let response = NextResponse.redirect(url);
    return response;
  } else {
    requestHeaders.set('userid', result.user_id);
    requestHeaders.set('session_id', result.session_id);
    return NextResponse.next({
      request: {
        headers: requestHeaders
      }
    });
  }
}

export const config = {
  unstable_allowDynamic: [
    '/node_modules/**', // use a glob to allow anything in the function-bind 3rd party module
  ],
}