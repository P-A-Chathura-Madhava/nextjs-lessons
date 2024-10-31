import React from 'react'

function page() {
    const getRanodmNumber = (count: number) => {
        return Math.floor(Math.random() * count);
    }

    const random = getRanodmNumber(2);

    if (random ===1) {
        throw new Error("Error loading Blog");
    }
  return (
    <div className='flex justify-center items-center container mx-auto pt-40'>
        <h2 className='text-4xl font-bold'>Blogs Page</h2>
    </div>
  )
}

export default page