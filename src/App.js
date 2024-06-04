import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import Footer from './components/Footer';
import Impressum from './pages/Impressum';
import Home from './pages/Home';
import Bestellen from './pages/Bestellen';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios
      .get('https://6659e945de346625136e669b.mockapi.io/items')
      .then((res) => {
        setItems(res.data);
      });
  }, []);

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route path="/" element={<Home items={items} />} />

        <Route path="/bestellen/*" element={<Bestellen />} />

        <Route path="/impressum" element={<Impressum />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
