// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { updateSession } from '@/utils/supabase/middleware';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/', '/login']);

export default clerkMiddleware(async (auth, request) => {
  const isPublic = isPublicRoute(request);
  const user = await auth();
  if (!user.userId && !isPublic) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  const response = await updateSession(request);
  return response;
});

export const config = {
  matcher: [
    '/((?!_next/static/|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)).*)',
  ],
};
