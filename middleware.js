import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
 

export async function middleware(request) { 
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
    const { pathname } = request.nextUrl
    
    if (pathname.startsWith('/dashboard/admin') && !token) { 
        return NextResponse.redirect(new URL('/login', request.url))
    }
    if (token && token.role !== "admin") {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    } 
    return NextResponse.next()
}
 

export const config = {
  matcher: [
    "/dashboard/manage-users/:path*",
    "/dashboard/manage-services/:path*",
    "/dashboard/messages/:path*",
  ],
};
