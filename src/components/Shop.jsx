import './Components.css';
import ItemCard from './ItemCard';

function Shop ( {inventory} ) {
    return (
        <div className='shop'>
            {inventory.map((index) => (
                <ItemCard key={index.code} name={index.name} price={index.price} description={index.description} image={index.image} />
            ))}
        </div>
    )
}

export default Shop;