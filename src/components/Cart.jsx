import './Components.css';
import CartItem from './CartItem';
import { useEffect, useState } from 'react';

function Cart ({ cart, inventory, total, addToCart, removeFromCart }) {

    const uniqueCodes = [];

    const uniqueItems = cart.filter(item => {
        const isDuplicate = uniqueCodes.includes(item.code);
        if (!isDuplicate) {
            uniqueCodes.push(item.code);
            return true;
        }
        return false;
    });

    console.log(uniqueItems);

    
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
            {uniqueItems.map((item, index) => (
                // <li className='cart-item' key={index}>
                //     <img className='product-image-small' src={item.image} />
                //     <p>{item.name}</p>
                // </li>
                <CartItem 
                    key={index}
                    item={item}
                    name={item.name}
                    image={item.image}
                    code={item.code}
                    cart={cart}
                    total={total}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <br />
            <br />
            <p>Total: ${total}</p>
            <br />
            <br />
            <button className='btn-checkout'>Checkout</button>
        </div>
    )
}

export default Cart;