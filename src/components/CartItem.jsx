import './Components.css';
import { useEffect } from 'react';

function CartItem ({ cart, name, image, code, total }) {

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

    return (
        <div className='cart-item'>
            <img className='product-image-small' src={image} />
            <p>{name}     X     {numberInCart}</p>
        </div>
    )
}

export default CartItem;