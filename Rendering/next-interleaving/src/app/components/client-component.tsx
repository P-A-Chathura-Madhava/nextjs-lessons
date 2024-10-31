"use client";

import React, { useState } from 'react'
import ServerComponent from './server-component';

function ClientComponent({children}: {children: React.ReactNode}) {
    const [name, setName] = useState("");

  return (
    <div>
        <h1>client-component</h1>
        {children}
    </div>
  )
}

export default ClientComponent