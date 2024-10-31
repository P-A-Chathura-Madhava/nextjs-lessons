import { cookies } from "next/headers";
import { NextRequest } from "next/server";

// using Set-Cookie header and request object
// export async function GET(request: NextRequest) { 
//     const theme = request.cookies.get("theme");
//     console.log(theme);    
    
//     return new Response("Profile API Data", {
//         headers: {
//             "Set-Cookie": "theme=dark"
//         }
//     });
// }

// using cookie function from NextJS
export async function GET(request: NextRequest) { 
    // get cookies
    const resultsPerPageCookie = cookies().get("resultsPerPage");
    console.log(resultsPerPageCookie);    

    // set cookie
    cookies().set("resultsPerPage", "20");
    
    return new Response("Profile API Data");
}