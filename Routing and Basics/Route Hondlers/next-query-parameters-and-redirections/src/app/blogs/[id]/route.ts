import { redirect } from "next/navigation";
import { blogs } from "../data";

// Redirections in Route Handlers
export async function GET(request: Request, {params}: {params: {id: string}}) {
    if (parseInt(params.id) > blogs.length) {
        redirect("/blogs");
    }
    const blog = blogs.find((blog)=>blog.id === parseInt(params.id));
    return Response.json(blog);
}