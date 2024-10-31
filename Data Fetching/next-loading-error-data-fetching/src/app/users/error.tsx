"use client";

import React, { useEffect } from 'react'

function ErrorPage({error}: {error: Error}) {
  useEffect(()=>{
    console.log(`${error}`)
  }, [error]);
  
  return (
    <div className='container mx-auto pt-40 flex justify-center items-center'>
        <h2 className='text-2xl font-bold'>Error Data Fetching</h2>
    </div>
  )
}

export default ErrorPage