import './Components.css';
import ItemCard from './ItemCard';

function Shop ( {inventory} ) {
    return (
        <div>
            {inventory.map((index) => (
                <ItemCard key={index.code} name={index.name} price={index.price} description={index.description} />
            ))}
        </div>
    )
}

export default Shop;