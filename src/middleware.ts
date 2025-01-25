import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  //   return NextResponse.redirect(new URL('/home', request.url))
  // if (request.nextUrl.pathname == '/deshboard') {
  //     console.log('middleware');

  // }

  const storeCookie = await cookies();
 const token = storeCookie.get("token")?.value;


  console.log(request.nextUrl.pathname);
  if (token === "yeamatekudasai" && request.nextUrl.pathname == "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  if (token !== "yeamatekudasai" && request.nextUrl.pathname == "/dashboard") {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/:path*", "/dashboard/:path"],
};
