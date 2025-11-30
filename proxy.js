import { NextResponse } from "next/server";

export function proxy(request) {
  //   return NextResponse.json({ message: "This is a proxy route" });
  return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: "/about/:path*", // macthes that if the path is same.
};

// because of the new update in the Middlewares in nextJs, we now use proxy() instead of middleware() to create a proxy route.
