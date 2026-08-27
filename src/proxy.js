import { NextResponse } from "next/server";

const gonePaths = new Set([
  "/responsive-website-development",
  "/hire-ui-ux-designer",
  "/mobile-app-development",
  "/android-app-development",
  "/ios-app-development",
  "/cross-platform-app-development",
  "/augmented-reality-app-development",
  "/game-app-development",
  "/digital-marketing-services",
  "/seo-services",
  "/our-services",
]);

export function proxy(request) {
  const pathname = request.nextUrl.pathname.replace(/\/$/, "");

  if (gonePaths.has(pathname)) {
    return new NextResponse("Gone", {
      status: 410,
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "no-store",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/responsive-website-development",
    "/hire-ui-ux-designer",
    "/mobile-app-development",
    "/android-app-development",
    "/ios-app-development",
    "/cross-platform-app-development",
    "/augmented-reality-app-development",
    "/game-app-development",
    "/digital-marketing-services",
    "/seo-services",
    "/our-services",
  ],
};