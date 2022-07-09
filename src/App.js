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
      description: `A classic mid-level snare drum. Perfect for when you require a sound that is both modern and vintage, 
                    but you don't want to compromise on build quality and durability.`,
    },
    {
      name: 'Ludwig Black Beauty',
      code: 'blackbeauty',
      price: 849,
      description: `THE classic snare drum. The original black beauty has one of the most sought after snare tones around. 
                    Warm and metallic with just the right amount of sustain. These drums are released each year in limited 
                    quantities.`,
    },
    {
      name: 'Mapex Black Panther',
      code: 'blackpanther',
      price: 479,
      description: `The flagship snare drum of the Mapex brand, the black panther is truly a 'new classic'. 
                    Using only the best modern construction techniques, the Black Panther combines a hammered 
                    brass shell with triple-flanged hoops that results in a sound unlike any snare you're heard before.`,
    },
    {
      name: 'DW Black Nickel',
      code: 'dwblacknickel',
      price: 399,
      description: `Sometimes called "the poor man's Black Beauty", but only by those that aren't familiar with the skill and 
                    level of detail that the master drum builders at DW possess. The shell is constructed of a layer of black 
                    nickel over a brass core, giving this drum a warm, round tone that is uncharacteristic of most metal snares.`,
    },
  ]


  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/shop" element={ <Shop cart={cart} inventory={inventory}/> } />
          <Route path="/cart" element={ <Cart cart={cart} inventory={inventory}/>} />
          <Route  />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
