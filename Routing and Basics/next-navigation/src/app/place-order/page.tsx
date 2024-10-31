"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

function page() {
    const router = useRouter();

    const handleClick = () => {
        alert("Order Placed");
        router.push("/");
    }

  return (
    <div className='flex justify-center items-center pt-20'>
        <button className='border p-2 bg-green-800 text-white hover:bg-white hover:text-green-800' onClick={handleClick}>Place Order</button>
    </div>
  )
}

export default page