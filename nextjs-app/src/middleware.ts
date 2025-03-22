// https://nextjs-ko.org/docs/app/building-your-application/routing/middleware#matching-paths

import { NextRequest, NextResponse } from 'next/server';
// import { cookies } from 'next/headers';

// 1. Specify protected and public routes
// const protectedRoutes = ['/dashboard'];
// const publicRoutes = ['/login', '/signup', '/'];

export function middleware(req: NextRequest) {
  console.log('접속 권한 체크 ');
  console.log(req.url);
  // console.log(req.nextUrl);
  //   // 2. Check if the current route is protected or public
  //   const path = req.nextUrl.pathname
  //   const isProtectedRoute = protectedRoutes.includes(path)
  //   const isPublicRoute = publicRoutes.includes(path)

  //   // 3. Decrypt the session from the cookie
  //   const cookie = (await cookies()).get('session')?.value
  //   const session = await decrypt(cookie)

  //   // 4. Redirect to /login if the user is not authenticated
  //   if (isProtectedRoute && !session?.userId) {
  //     return NextResponse.redirect(new URL('/login', req.nextUrl))
  //   }

  //   // 5. Redirect to /dashboard if the user is authenticated
  //   if (
  //     isPublicRoute &&
  //     session?.userId &&
  //     !req.nextUrl.pathname.startsWith('/dashboard')
  //   ) {
  //     return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  //   }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
