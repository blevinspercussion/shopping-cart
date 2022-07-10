import './Components.css';
import '../../public/img/acrolite.png';
import '../../public/img/black_beauty.webp';
import '../../public/img/black_panther.png';
import '../../public/img/dw_bn.webp';


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
                <img className='product-image' src={image}></img>
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