"use client";
import React, { useState } from 'react'

function ContactPage() {
    const [name, setName] = useState("");

    // this log will be seen in the browser's terminal not in the terminal of the server because this is a client component
    console.log("Contact Page is a Cient Component");
    
  return (
    <div className="container mx-auto pt-40 flex justify-center items-center flex-col gap-2">
    <h1 className="text-4xl font-bold">Contact Page</h1>
    <input className='bg-slate-300 py-2 px-4 rounded-md' type="text" value={name} onChange={e=>setName(e.target.value)} placeholder='Type Your Name Here' />
    <label htmlFor="name">Name : {name}</label>
  </div>
  )
}

export default ContactPage