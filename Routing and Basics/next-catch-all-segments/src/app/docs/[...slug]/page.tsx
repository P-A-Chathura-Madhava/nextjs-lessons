import React from 'react'

function page({params}: {params: {slug: string[]}}) {
  return (
    <div className='container mx-auto mt-4'>
        <h2>URL slug array 0 index contains : {params.slug[0]}</h2>
        <h2>URL slug array 1 index contains : {params.slug[1]}</h2>
    </div>
  )
}

export default page