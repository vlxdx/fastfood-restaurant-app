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
import Notfoundpage from './pages/Notfoundpage/Notfoundpage';

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cart, setCart] = useState([]);

  const initializeQuantities = () => {
    return menuData.Speisekarte.Kategorien.reduce((acc, category) => {
      category.Artikel.forEach((item) => {
        acc[item.Name] = 1;
      });
      return acc;
    }, {});
  };

  const [quantities, setQuantities] = useState(initializeQuantities);

  const addToCart = (item) => {
    const itemInCart = cart.find(
      (cartItem) =>
        cartItem.Name === item.Name &&
        JSON.stringify(cartItem.options) === JSON.stringify(item.options)
    );

    if (itemInCart) {
      setCart(
        cart.map((cartItem) =>
          cartItem.Name === item.Name &&
          JSON.stringify(cartItem.options) === JSON.stringify(item.options)
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantities[item.Name],
              }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: quantities[item.Name] }]);
    }

    setQuantities((prev) => ({
      ...prev,
      [item.Name]: 1,
    }));
  };

  const removeUnitFromCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) =>
          cartItem.Name === item.Name &&
          JSON.stringify(cartItem.options) === JSON.stringify(item.options)
      );

      if (existingItem.quantity === 1) {
        return prevCart.filter(
          (cartItem) =>
            cartItem.Name !== item.Name ||
            JSON.stringify(cartItem.options) !== JSON.stringify(item.options)
        );
      } else {
        return prevCart.map((cartItem) =>
          cartItem.Name === item.Name &&
          JSON.stringify(cartItem.options) === JSON.stringify(item.options)
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
    });
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const increaseQuantity = (name) => {
    setQuantities((prev) => ({
      ...prev,
      [name]: prev[name] + 1,
    }));
  };

  const decreaseQuantity = (name) => {
    setQuantities((prev) => ({
      ...prev,
      [name]: prev[name] > 1 ? prev[name] - 1 : 1,
    }));
  };

  const handleResetQuantity = (name) => {
    setQuantities((prev) => ({
      ...prev,
      [name]: 1,
    }));
  };

  return (
    <AppContext.Provider value={{ cart, addToCart, setCartOpened }}>
      <div className="wrapper">
        {cartOpened && (
          <Cart
            cart={cart}
            onClose={() => setCartOpened(false)}
            addToCart={addToCart}
            removeUnitFromCart={removeUnitFromCart}
            removeFromCart={removeFromCart}
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
                  quantities={quantities}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  handleResetQuantity={handleResetQuantity}
                />
              }
            />
            <Route
              path="sandwiches"
              element={
                <Sandwiches
                  items={menuData.Speisekarte.Kategorien[1].Artikel}
                  addToCart={addToCart}
                  quantities={quantities}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  handleResetQuantity={handleResetQuantity}
                />
              }
            />
            <Route
              path="burger"
              element={
                <Burger
                  items={menuData.Speisekarte.Kategorien[2].Artikel}
                  addToCart={addToCart}
                  quantities={quantities}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  handleResetQuantity={handleResetQuantity}
                />
              }
            />
            <Route
              path="beilagen"
              element={
                <Beilagen
                  items={menuData.Speisekarte.Kategorien[3].Artikel}
                  addToCart={addToCart}
                  quantities={quantities}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  handleResetQuantity={handleResetQuantity}
                />
              }
            />
            <Route
              path="salate"
              element={
                <Salate
                  items={menuData.Speisekarte.Kategorien[4].Artikel}
                  addToCart={addToCart}
                  quantities={quantities}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  handleResetQuantity={handleResetQuantity}
                />
              }
            />
          </Route>

          <Route path="/impressum" element={<Impressum />} />

          <Route path="*" element={<Notfoundpage />} />
        </Routes>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
