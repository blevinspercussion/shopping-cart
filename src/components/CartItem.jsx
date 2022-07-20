import './Components.css';
import acrolite from './img/acrolite.png';
import blackbeauty from './img/blackbeauty.png';
import blackpanther from './img/blackpanther.png';
import dwblacknickel from './img/dwblacknickel.png';
import { useEffect } from 'react';

function CartItem ({ cart, item, name, image, code, total, addToCart, removeFromCart }) {



    const getNumberInCart = () => {
        let count = 0;
        for (let item of cart) {
            if (item.code === code) {
                count++;
            }
        };
        return count;
    };

    let numberInCart = getNumberInCart();

    const handlePlusClick = (e) => {
        e.preventDefault();
        addToCart(item);
        getNumberInCart();
    }


    const handleMinusClick = (e) => {
        e.preventDefault();
        removeFromCart(item, name);
        getNumberInCart();
    };



    return (
        <div className='cart-item'>
            <img className='product-image-small' src={require("./img/" + code + ".png")} />
            <p>{name}     X     {numberInCart}</p>
            <div className='add-remove-buttons'>
                <button onClick={handleMinusClick}>-</button>
                <button onClick={handlePlusClick}>+</button>
            </div>
        </div>
    )
}

export default CartItem;