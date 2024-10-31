"use client";

import React from 'react'
import { serverSideFunction } from '../utils/server-utils';

function ClientComponentPage() {
    console.log("Client Component");
    // this function is a server-only functions. So it will be a build error.
    const result = serverSideFunction();

  return (
    <div>
    <h1>Client Component Page</h1>
    <p>{result}</p>
</div>
  )
}

export default ClientComponentPage