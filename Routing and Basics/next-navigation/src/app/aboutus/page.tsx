import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='container flex justify-center items-center pt-20 flex-col gap-2'>
      <h1 className='text-4xl font-bold'>About Us Page</h1>
      <Link className='hover:text-blue-600 hover:underline' href={"/"}>Back to Home</Link>
    </div>
  )
}

export default page