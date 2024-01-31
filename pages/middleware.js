import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const requestForNextAuth = {
    headers: {
      cookie: request.headers.get("cookie"),
    },
  };

  const session = await getSession({ req: requestForNextAuth });

  if (!session && !request.nextUrl.pathname.includes("/api/auth/signin")) {
    return NextResponse.redirect(
      new URL(`${process.env.NEXTAUTH_URL}/api/auth/signin`)
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
