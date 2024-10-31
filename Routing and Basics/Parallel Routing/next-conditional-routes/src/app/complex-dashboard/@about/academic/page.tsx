import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='flex justify-center items-center flex-col'>
    <h2 className='text-2xl font-bold'>Academic Component</h2>
    <Link className='hover:text-blue-600 hover:underline' href={"/complex-dashboard"}>Back to Default</Link>
</div>
  )
}

export default page