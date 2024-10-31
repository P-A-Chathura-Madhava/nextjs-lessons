import React from 'react'

function page({params}: {params: {productId: string}}) {
  return (
    <div className='container mx-auto flex justify-center items-center'><h2 className='text-xl font-bold'>Product ID : {params.productId}</h2></div>
  )
}

export default page