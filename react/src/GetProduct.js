import React, {useEffect, useState} from 'react';
import {
    useParams,
  } from "react-router-dom";

export default function GetProduct(){
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
      fetch(`/api/products/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data));
    }, []);
    console.log("product details: "+ product);


return (
    <div className="product">
     <img src={product.image} className="product-image"/>
      <span>{product.category}</span>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </div>
 )
}


