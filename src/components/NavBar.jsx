import './Components.css';

import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <div className='navbar'>
            <ul>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/cart">
                    <li>Cart</li>
                </Link>
            </ul>
        </div>
    )
}

export default NavBar;