"use client";
import React from 'react'

function ErrorBoundary({error, reset}:{error: Error, reset: ()=>void}) {
  return (
    <div className='flex justify-center items-center container mx-auto pt-40 flex-col'>
    <h2 className='text-4xl font-bold'>Blogs Page : {error.message}</h2>
    <button className='border bg-green-400 rounded-md py-2 px-4 font-bold hover:bg-white hover:text-green-800 transition-all duration-300' onClick={reset}>Reset Component</button>
</div>
  )
}

export default ErrorBoundary