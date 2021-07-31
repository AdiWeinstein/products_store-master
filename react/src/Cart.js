import './Cart.css';
import {CatalogContext} from './CatalogContext';
import {CartContext} from './CartContext';
import {useContext} from 'react';
import {
    Link,
  } from "react-router-dom";

function CartItem({name, quantity, id}) {
    return (
        <div className="cart-item">
            <Link to={`/products/${id}`}>
                <span className="cart-item-name">{name}</span>
            </Link>
            <span className="cart-item-quantity">{quantity}</span>
        </div>
    );
}

export default function Cart() {
    const {products} = useContext(CatalogContext);
    const {cartItems: items} = useContext(CartContext);
    console.log(items);
    return (
        <div className="cart">
            <h3>Cart</h3>
            {Object.entries(items)
                .map(([id, quantity]) =>
                    <CartItem
                        name={products[id-1].title}
                        quantity={quantity}
                        id={id}
                    />)}
        </div>
    );
}
