import './Components.css';
import CartItem from './CartItem';
import { useEffect } from 'react';

function Cart ({ cart, inventory, total, addToCart, removeFromCart }) {

    useEffect(() => {

    });

    return (
        <div className='cart'>
            <h1>Cart</h1>
            {cart.map((item, index) => (
                <div>{item.name}</div>
                // <CartItem 
                //     key={index}
                //     cart={cart}
                //     name={item.name}
                //     total={total}
                //     />
            ))}
            Total= ${total}
        </div>
    )
}

export default Cart;