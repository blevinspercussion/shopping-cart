import './Components.css';
import acrolite from './img/acrolite.png';
import blackbeauty from './img/blackbeauty.png';
import blackpanther from './img/blackpanther.png';
import dwblacknickel from './img/dwblacknickel.png';


import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

function ItemCard ({code, item, name, price, description, image, cart, inventory, total, addToCart, removeFromCart}) {

    
    useEffect(() => {
        getNumberInCart();
    }, [cart])

    const getNumberInCart = () => {
        let count = 0;
        for (let item of cart) {
            if (item.code === code) {
                count++;
            }
        };
        item.inCart = count;
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
        <div className='item-card'>
            <h1>{name}</h1>
            <Link to={'/shop/' + name}>
                <img className='product-image' src={require("./img/" + code + ".png")}></img>
            </Link>
            <h2>${price}</h2>
            <h3>In Cart: {numberInCart}</h3>
            <div className='add-remove-buttons'>
                <button onClick={handleMinusClick}>-</button>
                <button onClick={handlePlusClick}>+</button>
            </div>
        </div>
    )
}

export default ItemCard;