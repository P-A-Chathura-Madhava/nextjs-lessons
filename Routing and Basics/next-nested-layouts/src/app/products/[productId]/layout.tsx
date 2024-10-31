import React from 'react'

function ProductDetailsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
                <div className="bg-blue-300 h-12 flex items-center justify-center">
          <h1 className="text-4xl font-bold">Product Details Header</h1>
        </div>
        {children}
        <div className="bg-slate-300 h-12 flex items-center justify-center">
          <h1 className="text-4xl font-bold">Product Details Footer</h1>
        </div>
    </div>
  )
}

export default ProductDetailsLayout