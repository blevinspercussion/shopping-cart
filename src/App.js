import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

function App() {
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
