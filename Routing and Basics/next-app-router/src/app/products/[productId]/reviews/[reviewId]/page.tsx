import React from 'react'

function page({params}: {params: {productId: string, reviewId: string}}) {
  return (
    <div className='container mx-auto mt-4'>
        <h2>Product ID : {params.productId}</h2>
        <h2>Review ID : {params.reviewId}</h2>
    </div>
  )
}

export default page