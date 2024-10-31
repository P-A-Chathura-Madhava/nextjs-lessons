import React from 'react'

function NotFound() {
  return (
    <div className='container mx-auto flex justify-center items-center pt-40 flex-col gap-4'>
        <h1 className='text-4xl font-bold text-center'>Page Not Found</h1>
        <p>Cannot find the requested resource</p>
    </div>
  )
}

export default NotFound