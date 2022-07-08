import './Components.css';

import NavBar from './NavBar';

import { Link } from 'react-router-dom';

function Header () {
    return (
        <div className='header'>
            <Link to="/">
                <h1>The Snare Drum Store</h1>
            </Link>
            <NavBar />
            
        </div>
    )
}

export default Header;