import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
  const { pathname } = request.nextUrl

  const adminRoutes = ["/dashboard/manage-users", "/dashboard/manage-services", "/dashboard/messages"]
  const isAdminRoute = adminRoutes.some(route => pathname.startsWith(route))

  const isProtectedRoute =
    pathname.startsWith("/dashboard") ||
    (pathname.startsWith("/services/") && pathname !== "/services")

  // Login required
  if (isProtectedRoute && !token) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Admin only routes
  if (isAdminRoute && token?.role !== "admin") {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/services/:path*",
  ],
}