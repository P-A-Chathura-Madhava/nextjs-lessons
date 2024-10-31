"use client";

import React from 'react'
import { clientSideFunction } from '../utils/client-utils';

function ClientComponentPage() {
    console.log("Client Component");
    // this function is a client-only functions.
    const result = clientSideFunction();

  return (
    <div>
    <h1>Client Component Page</h1>
    <p>{result}</p>
</div>
  )
}

export default ClientComponentPage