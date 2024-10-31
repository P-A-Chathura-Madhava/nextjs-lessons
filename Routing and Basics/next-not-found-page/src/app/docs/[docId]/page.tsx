import { notFound } from 'next/navigation'
import React from 'react'

function page({params}: {params: {docId: string}}) {
    if (parseInt(params.docId) > 1000) {
        notFound();
    }
  return (
    <div>
      <h2>Doc ID : {params.docId}</h2>
    </div>
  )
}

export default page