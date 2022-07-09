import './Components.css';
import CartItem from './CartItem';

function Cart ({ cart, inventory, total, addToCart, removeFromCart}) {
    return (
        <div className='cart'>
            <h1>Cart</h1>
            {cart.map((index) => (
                <CartItem cart={cart}/>
            ))}
        </div>
    )
}

export default Cart;