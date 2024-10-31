import { NextRequest } from "next/server";
import { products } from "./data";

// Using Query Parameters
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    console.log(searchParams);
    const query = searchParams.get("query");
    const filteredProducts = query ? products.filter(product=>product.title.includes(query)) : products;
    
    return Response.json(filteredProducts);
}