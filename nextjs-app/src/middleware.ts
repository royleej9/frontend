// https://nextjs-ko.org/docs/app/building-your-application/routing/middleware#matching-paths

import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { pagePath, PARAM_CALLBAK_URL } from './shared/lib/path';

// 인증 필요
const protectedRoutes: readonly string[] = [
  pagePath.dashboard(),
  pagePath.main(),
];

// 인증 필요 없음
const publicRoutes: readonly string[] = [pagePath.logn()];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
  const sessionCookie = (await cookies()).get('session')?.value;

  // 인증이 필요한 페이지 접속시 세션이 없을 때 > 로그인 페이지로 이동
  if (isProtectedRoute && !sessionCookie) {
    const loginUrl = new URL(pagePath.logn(), req.url);
    loginUrl.searchParams.set(PARAM_CALLBAK_URL, req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 인증이 필요하지 않은 페이지 접속시 세션이 있을 때
  if (isPublicRoute && sessionCookie) {
    return NextResponse.redirect(new URL(pagePath.dashboard(), req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|mockServiceWorker.js).*)',
  ],
};
