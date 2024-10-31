import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='flex justify-center items-center container mx-auto flex-col'>
    <h1 className='text-4xl font-bold mb-6'>Blogs Page</h1>
    <div className='flex flex-col gap-2 justify-center items-center'>
    <Link className='hover:text-blue-600 hover:underline' href={"/blogs/first"}>First Blog</Link>
    <Link className='hover:text-blue-600 hover:underline' href={"/blogs/second"}>Second Blog</Link>
    </div>
</div>
  )
}

export default page