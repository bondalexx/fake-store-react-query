import React from "react";

import './product.css';
import "tailwindcss/tailwind.css";

const Product = (props) => {

    return(
<div className="bg-white rounded-lg overflow-hidden shadow-lg product">
<img className="product-img" src={props.img} alt="Product 1" />
<div className="p-4">
  <h2 className="text-gray-800 font-bold text-lg mb-2">{props.title}</h2>
  <p className="text-gray-600 text-sm">{props.category}</p>
  <p className="text-gray-700 font-bold mt-2">${props.price}</p>
</div>
</div>
    )
}

export default Product;