import React from 'react'

function page({params}: {params: {slug: string[]}}) {
  if (params?.slug?.length >= 1) {
    return (
      <div className='container mx-auto mt-4'>
          <h2>URL slug array length {params?.slug?.length} contains : {params?.slug}</h2>
  
      </div>
    )
  }
  return (
    <div className='container mx-auto mt-4'>
        <h2>URL slug array length 0 contains : {params?.slug}</h2>

    </div>
  )
}

export default page