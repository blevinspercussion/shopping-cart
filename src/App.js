import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Footer from './components/Footer';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

function App() {

  // Initialize State 
  const [cart, setCart] = useState([]);

  // Define Props
  const inventory = [
    {
      name: 'Ludwig Acrolite',
      code: 'acrolite',
      price: 479,
    },
    {
      name: 'Ludwig Black Beauty',
      code: 'blackbeauty',
      price: 849
    },
    {
      name: 'Mapex Black Panther',
      code: 'blackpanther',
      price: 479,
    },
    {
      name: 'DW Black Nickel',
      code: 'dwblacknickel',
      price: 399,
    },
  ]


  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/shop" element={ <Shop /> } />
          <Route path="/cart" element={ <Cart />} />
          <Route  />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
