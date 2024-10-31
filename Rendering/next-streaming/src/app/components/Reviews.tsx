import React from 'react'

export const Reviews = async () => {
    await new Promise((resolve)=>setTimeout(resolve, 4000))
  return (
    <h2 className='text-2xl font-bold'>Reviews</h2>
  )
}

export default Reviews