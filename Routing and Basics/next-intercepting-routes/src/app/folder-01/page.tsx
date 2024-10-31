import Link from 'next/link'
import React from 'react'

function Folder01() {
  return (
    <div className='flex justify-center items-center mt-40 gap-4 flex-col'>
        <h1 className='text-4xl font-bold'>Folder 01 Page</h1>
        <Link className='border rounded-md bg-blue-400 hover:bg-blue-600 transition-all duration-300 py-2 px-4 text-white font-bold' href={"/folder-01/folder-02"}>Go to Folder 02 Page</Link>
    </div>
  )
}

export default Folder01