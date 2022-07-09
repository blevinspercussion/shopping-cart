import './Components.css';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function NavBar ({cart, total}) {

    useEffect(() => {
    }, [cart]);

    return (
        <div className='navbar'>
            <ul>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/cart">
                    <li>Items in cart: {cart.length}, {total}</li>
                </Link>
                
            </ul>
        </div>
    )
}

export default NavBar;