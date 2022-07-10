import './Components.css';

import NavBar from './NavBar';

import { Link } from 'react-router-dom';

function Header ({cart, total}) {
    return (
        <div className='header'>
            <Link to="/shopping-cart">
                <h1>The Snare Drum Store</h1>
            </Link>
            <NavBar cart={cart} total={total}/>
            
        </div>
    )
}

export default Header;