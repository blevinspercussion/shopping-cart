import './Components.css';
import ItemCard from './ItemCard';
import ItemDetail from './ItemDetail';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Shop ( {inventory, cart, total, addToCart, removeFromCart} ) {
    return (
        <div className='shop'>
                <Routes>
                    <Route path="/shop/:itemName" element={ <ItemDetail cart={cart} inventory={inventory} /> } />
                </Routes>

            {inventory.map((index) => (
                <ItemCard key={index.code} code={index.code} name={index.name} price={index.price} description={index.description} image={index.image} total={total} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
            ))}
        </div>
    )
}

export default Shop;