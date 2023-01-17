import { NextResponse } from 'next/server';
import schemas from './utils/db.js';

export async function getStaticProps() {

}

// This function can be marked `async` if using `await` inside
export function middleware(req, res) {
  const requestHeaders = new Headers(req.headers);
  const authed = false;
  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  if (!authed && !pathname.startsWith('/users/login') && !pathname.startsWith('/_next')) {
    url.pathname = '/users/login';
    let response = NextResponse.redirect(url);

    if (!req.cookies.sessionId) {
      let session_id = crypto.randomUUID();
      let sessionObj = {
        session_id: session_id,
        user_id: null
      };
      schemas.Session.create(sessionObj);
      response.cookies.set('session_id', sessionId);
    }

    return response;
  } else {
    requestHeaders.set('userid', '1337');
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