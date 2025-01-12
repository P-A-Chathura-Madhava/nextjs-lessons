import React, { Suspense } from "react";
import Product from "../components/Product";
import Reviews from "../components/Reviews";

function ProductDetail() {
  return (
    <div>
      <h1>Product Detail Page</h1>
      <Suspense fallback={<p>Loading Product</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading Reviews</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}

export default ProductDetail;
