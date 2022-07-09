import './Components.css';

import { Link } from 'react-router-dom';

function ItemCard ({code, name, price, description, image, addToCart}) {

    const handlePlusClick = (e) => {
        e.preventDefault();
        addToCart(code);
    };

    return (
        <div className='item-card'>
            <h1>{name}</h1>
            <Link to={'/shop/' + name}>
                <img className='product-image' src={image}></img>
            </Link>
            <h2>${price}</h2>
            <h3>In Cart: </h3>
            <div className='add-remove-buttons'>
                <button>-</button>
                <button onClick={handlePlusClick}>+</button>
            </div>
        </div>
    )
}

export default ItemCard;