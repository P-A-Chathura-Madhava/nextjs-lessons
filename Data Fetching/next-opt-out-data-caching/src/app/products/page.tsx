import React from 'react'

// route segment configuration
export const fetchCache = "default-cache";

type Product = {
    id: number,
    title: string,
    price: number,
    description: string
}

async function ProductPage() {
    // Stop caching data
    const response = await fetch("http://localhost:3001/products", {
        cache: "no-store"
    });
    const products = await response.json();

  return (
    <div className='container mx-auto pt-2'>
        <h2 className='text-2xl font-bold pb-2'>Products</h2>
        <ul className='flex flex-col gap-4'>
        {
            products.map((product: Product)=>{
                return(
                    <li className='flex flex-col gap-2' key={product.id}>
                        <p>Product ID : {product.id}</p>
                        <p>Product Title : {product.title}</p>
                        <p>Product Description : {product.description}</p>
                        <p>Product Price : {product.price}</p>
                    </li>
                )
            })
        }
        </ul>
    </div>
  )
}

export default ProductPage