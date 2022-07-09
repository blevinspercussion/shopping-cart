import './Components.css';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function NavBar ({cart}) {

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <div className='navbar'>
            <ul>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/cart">
                    <li>Items in cart: {cart.length}</li>
                </Link>
                
            </ul>
        </div>
    )
}

export default NavBar;