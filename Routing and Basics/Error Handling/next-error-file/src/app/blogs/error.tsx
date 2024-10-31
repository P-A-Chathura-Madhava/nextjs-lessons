"use client";
import React from 'react'

function ErrorBoundary({error}:{error: Error}) {
  return (
    <div className='flex justify-center items-center container mx-auto pt-40'>
    <h2 className='text-4xl font-bold'>Blogs Page : {error.message}</h2>
</div>
  )
}

export default ErrorBoundary