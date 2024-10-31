import React from 'react'
import { Metadata } from 'next'

type Props = {
    params: {
        productId: string
    }
}

export const generateMetadata = ({params}: Props): Metadata => {
    return {
        title: `Product ${params.productId}`
    }
}

// Using an Async function
// export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
//     const title = await new Promise(resolve => {
//         setTimeout(()=>{
//             resolve(`Desktop PC ${params.productId}`)
//         }, 100)
//     })
//     return {
//         title: `Product ${title}`
//     }
// }

function page({params}: Props) {
  return (
    <div>{params.productId}</div>
  )
}

export default page