import './Product.css';
import {useContext} from 'react';
import {CartContext} from './CartContext';
import {
  Link,
} from "react-router-dom";
import styled from 'styled-components';

export default function Product({
  category,
  description,
  id,
  image,
  title,
  price,
  onAddToCart,
}) {


  const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 5px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: white;
`;

const CardItem = styled.div`
  width: 300px;
  border: 1px solid palevioletred;
  border-radius: 10px;
  margin: 5px;
  padding: 10px;
  box-sizing: border-box;
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'black'
};

const Image = {
  width:"90%",
}


const {addToCart} = useContext(CartContext);

const onDeleteProduct = () => {
    fetch(`/products/${id}`, {
        method: 'delete',
    });
};

const onEditProduct = () =>{
  fetch(`/products/${id}`, {
    method: 'put',
});
};




  return (
    <CardItem>
      <Link  style={linkStyle} to={`/products/${id}`}>
        <img src={image} className="product-image" style={Image}/>
        <span>{category}</span>
        <Title>{title}</Title>
        <p>{description}</p>
        <Button onClick={() => addToCart(id)}>Add to Cart (${price})</Button>
        <Button onClick= {onDeleteProduct}>Delete Product</Button>
        <Button onClick= {onEditProduct}>Edit</Button>
      </Link>
    </CardItem>
  );
}


