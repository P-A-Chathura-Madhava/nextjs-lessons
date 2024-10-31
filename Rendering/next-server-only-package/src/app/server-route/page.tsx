import React from 'react'
import { serverSideFunction } from '../utils/server-utils'

function ServerComponentPage() {
  console.log("Server Component");  
  const result = serverSideFunction();

  return (
    <div>
        <h1>Server Component Page</h1>
        <p>{result}</p>
    </div>
  )
}

export default ServerComponentPage