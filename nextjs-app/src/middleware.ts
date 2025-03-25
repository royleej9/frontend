// https://nextjs-ko.org/docs/app/building-your-application/routing/middleware#matching-paths

import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
// import { cookies } from 'next/headers';

// 1. Specify protected and public routes
// const protectedRoutes = ['/dashboard'];
const noneRequiredAuthPaths = ['/login', '/signup', '/'];

const excludedExtensions = ['.js', '.ico'];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  console.log(`요청 path: ${path}`);

  //   // 3. Decrypt the session from the cookie
  const sessionCookie = (await cookies()).get('session')?.value;

  const isExcludePath = excludedExtensions.some((ext) => path.endsWith(ext));
  if (isExcludePath) {
    return NextResponse.next();
  }

  const isNoneRequiredAuthPath = noneRequiredAuthPaths.includes(path);
  // 인증이 필요한 페이지 접속시 세션이 없을 때
  if (!isNoneRequiredAuthPath && !sessionCookie) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  // 인증이 필요하지 않은 페이지 접속시 세션이 있을 때
  if (isNoneRequiredAuthPath && sessionCookie) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
