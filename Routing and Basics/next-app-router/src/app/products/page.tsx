import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className="container mx-auto mt-4">
    <h1 className="text-4xl font-bold text-center">Products</h1>
    <div className='flex flex-col'>
    <Link className='hover:text-blue-600 hover:underline' href={""}>Product 01</Link>
    <Link className='hover:text-blue-600 hover:underline' href={""}>Product 02</Link>
    <Link className='hover:text-blue-600 hover:underline' href={""}>Product 03</Link>
    <Link className='hover:text-blue-600 hover:underline' href={""}>Product 04</Link>
    </div>
  </div>
  )
}

export default page