// Using Custom Matcher Config
// import Next Response and type Next Request
// import { NextResponse, type NextRequest } from "next/server";

// // define the middleware function that accepts NextReuest type request
// export function middleware(request: NextRequest) {
//     // this function redirects to the home page when the /profile is accessed
//     return NextResponse.redirect(new URL("/" /* new URL */, request.url /* base URL */))    
// }

// // specify the config object
// export const config = {
//     // where this middleware must apply to
//     matcher: "/profile"
// }

// Using Conditional Statements
// import Next Response and type Next Request
// import { NextResponse, type NextRequest } from "next/server";

// // define the middleware function that accepts NextReuest type request
// export function middleware(request: NextRequest) {
//     // this function redirects to the home page when the /profile is accessed
//     // Using the conditional statement
//     if (request.nextUrl.pathname === "/profile") {
//         return NextResponse.redirect(new URL("/" /* new URL */, request.url /* base URL */)) 
//     } 
// }

// URL rewriting
// import { NextResponse, type NextRequest } from "next/server";

// // define the middleware function that accepts NextReuest type request
// export function middleware(request: NextRequest) {
//     // this function redirects to the home page when the /profile is accessed
//     // Using the conditional statement
//     if (request.nextUrl.pathname === "/profile") {
//         return NextResponse.rewrite(new URL("/" /* new URL */, request.url /* base URL */)) 
//     } 
// }

// adding a custom cookie for all responses
// import { NextResponse, type NextRequest } from "next/server";

// // define the middleware function that accepts NextReuest type request
// export function middleware(request: NextRequest) {
//     // obtain the response object
//     const response = NextResponse.next();

//     const themePreference = request.cookies.get("theme");
//     // set theme to dark if the user not set any theme preference
//     if (!themePreference) {
//         response.cookies.set("theme", "dark");
//     }

//     return response;
// }

// adding a custom header for all responses
import { NextResponse, type NextRequest } from "next/server";

// define the middleware function that accepts NextReuest type request
export function middleware(request: NextRequest) {
    // obtain the response object
    const response = NextResponse.next();

    response.headers.set("custom-header", "custom-value")

    return response;
}