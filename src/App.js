import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer';
import Impressum from './pages/Impressum';
import Home from './pages/Home';
import Bestellen from './pages/Bestellen';
import Getraenke from './pages/Bestellen/Getraenke';
import Bestellauswahl from './pages/Bestellen/Bestellauswahl';
import Sandwiches from './pages/Bestellen/Sandwiches';
import Burger from './pages/Bestellen/Burger';
import Beilagen from './pages/Bestellen/Beilagen';
import Salate from './pages/Bestellen/Salate';
import menuData from './data/menu.json';
import AppContext from './context';

function App() {
  const [cartOpened, setCartOpened] = useState(false);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.Name === item.Name
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.Name === item.Name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.Name === item.Name
      );
      if (existingItem.quantity === 1) {
        return prevCart.filter((cartItem) => cartItem.Name !== item.Name);
      } else {
        return prevCart.map((cartItem) =>
          cartItem.Name === item.Name
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
    });
  };

  return (
    <AppContext.Provider value={{ cart, addToCart, setCartOpened }}>
      <div className="wrapper">
        {cartOpened && (
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            onClose={() => setCartOpened(false)}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/bestellen" element={<Bestellen />}>
            <Route path="" element={<Bestellauswahl />} />
            <Route
              path="getraenke"
              element={
                <Getraenke
                  items={menuData.Speisekarte.Kategorien[0].Artikel}
                  addToCart={addToCart}
                />
              }
            />
            <Route
              path="sandwiches"
              element={
                <Sandwiches
                  items={menuData.Speisekarte.Kategorien[1].Artikel}
                  addToCart={addToCart}
                />
              }
            />
            <Route
              path="burger"
              element={
                <Burger
                  items={menuData.Speisekarte.Kategorien[2].Artikel}
                  addToCart={addToCart}
                />
              }
            />
            <Route
              path="beilagen"
              element={
                <Beilagen
                  items={menuData.Speisekarte.Kategorien[3].Artikel}
                  addToCart={addToCart}
                />
              }
            />
            <Route
              path="salate"
              element={
                <Salate
                  items={menuData.Speisekarte.Kategorien[4].Artikel}
                  addToCart={addToCart}
                />
              }
            />
          </Route>

          <Route path="/impressum" element={<Impressum />} />
        </Routes>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
