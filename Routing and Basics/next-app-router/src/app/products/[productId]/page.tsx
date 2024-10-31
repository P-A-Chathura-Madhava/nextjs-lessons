"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

function page({params} : {
    params: {productId: string}
}) {
    const path = usePathname();

    // const ar = path.split("/");

  return (
    <div className='container mx-auto mt-4'>
        <h2>Product Details URL : {path}</h2>
        <h2>Product Detail ID &nbsp;&nbsp; : {params.productId}</h2>
    </div>
  )
}

export default page