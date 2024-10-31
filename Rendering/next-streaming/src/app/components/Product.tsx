import React from 'react'

export const Product = async () => {
    await new Promise((resolve)=>setTimeout(resolve, 2000))
  return (
    <h2 className='text-2xl font-bold'>Product</h2>
  )
}

export default Product