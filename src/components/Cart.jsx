import './Components.css';
import CartItem from './CartItem';
import { useEffect } from 'react';

function Cart ({ cart, inventory, total, addToCart, removeFromCart }) {

    const getNumberInCart = (code) => {
        let count = 0;
        for (let item of cart) {
            if (item.code === code) {
                count++;
            }
        };
        return count;
    };

    if (cart.length === 0) {
        return (
            <div className='cart'>
                <h1>Cart</h1>
                <p>Your cart is empty</p>
            </div>
        )
    }

    return (
        <div className='cart'>
            <h1>Cart</h1>
            {cart.map((item, index) => (
                // <li className='cart-item' key={index}>
                //     <img className='product-image-small' src={item.image} />
                //     <p>{item.name}</p>
                // </li>
                <CartItem 
                    key={index}
                    name={item.name}
                    image={item.image}
                    code={item.code}
                    cart={cart}
                    total={total}
                />
            ))}
            <br />
            <br />
            Total: ${total}
        </div>
    )
}

export default Cart;