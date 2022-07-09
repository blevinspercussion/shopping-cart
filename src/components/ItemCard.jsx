import './Components.css';

import { Link } from 'react-router-dom';

function ItemCard ({name, price, description, image}) {
    return (
        <div className='item-card'>
            <h1>{name}</h1>
            <Link to={'/shop/' + name}>
            <img className='product-image' src={image}></img>
            </Link>
            <h2>${price}</h2>
        </div>
    )
}

export default ItemCard;