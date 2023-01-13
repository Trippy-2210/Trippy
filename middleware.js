import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  let authed = true;
  if (!authed) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
}