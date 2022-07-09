import './Components.css';

import NavBar from './NavBar';

import { Link } from 'react-router-dom';

function Header ({cart}) {
    return (
        <div className='header'>
            <Link to="/">
                <h1>The Snare Drum Store</h1>
            </Link>
            <NavBar cart={cart}/>
            
        </div>
    )
}

export default Header;