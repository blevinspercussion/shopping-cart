import './Components.css';

function ItemCard ({name, price, description, image}) {
    return (
        <div className='item-card'>
            <h1>{name}</h1>
            <img className='product-image' src={image}></img>
            <h2>${price}</h2>
        </div>
    )
}

export default ItemCard;