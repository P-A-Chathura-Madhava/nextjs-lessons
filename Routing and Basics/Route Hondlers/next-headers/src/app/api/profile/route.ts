import { headers } from "next/headers";
import { type NextRequest } from "next/server";

// Using NextRequest
// export async function GET(request: NextRequest) {
//     // using Headers web API
//     const requestHeaders = new Headers(request.headers);

//     // log the Authorization header
//     console.log(requestHeaders.get("Authorization"));
    
//     return new Response("Profile API Data");
// }

// using headers() function
// export async function GET(request: NextRequest) {
//     // invoking headers() function
//     const headerList = headers();

//     // log the Authorization header
//     console.log(headerList.get("Authorization"));
    
//     return new Response("Profile API Data");
// }

// sending response headers
export async function GET(request: NextRequest) {
    // invoking headers() function
    const headerList = headers();

    // log the Authorization header
    console.log(headerList.get("Authorization"));
    
    return new Response("<h1>Profile API Data</h1>", {
        headers: {"Content-Type": "text/html"}
    });
}