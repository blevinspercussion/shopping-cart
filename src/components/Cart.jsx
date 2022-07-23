import './Components.css';
import { ReactDOM, useEffect } from 'react';
import CartItem from './CartItem';

function Cart ({ cart, total, addToCart, removeFromCart, inventory }) {

    // const uniqueCodes = [];

    // const uniqueItems = cart.filter(item => {
    //     const isDuplicate = uniqueCodes.includes(item.code);
    //     if (!isDuplicate) {
    //         uniqueCodes.push(item.code);
    //         return true;
    //     }
    //     return false;
    // });

    
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
            {inventory.map((item, index) => {
                if (getNumberInCart(item.code) > 0) {
                    return (
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
                    )
                }
            })}
            {/* {inventory.map((item, index) => (
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
                
            ))} */}
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