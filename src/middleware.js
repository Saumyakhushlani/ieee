import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("auth")?.value;

  if (path === "/login" && token) {
    return NextResponse.redirect(new URL("/form-data", request.url));
  }

  if (path.startsWith("/form-data") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/form-data/:path*"],
};

