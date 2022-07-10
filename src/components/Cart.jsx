import './Components.css';
import CartItem from './CartItem';
import { useEffect } from 'react';

function Cart ({ cart, inventory, total, addToCart, removeFromCart }) {

    return (
        <div className='cart'>
            <h1>Cart</h1>
            {cart.map((item, index) => (
                <li className='cart-item' key={index}>
                    <img className='product-image-small' src={item.image} />
                    <p>{item.name}</p>
                </li>
            ))}
        </div>
    )
}

export default Cart;