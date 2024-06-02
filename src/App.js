import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Footer from './components/Footer/Footer';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://6659e945de346625136e669b.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddtoConfigurator = () => {
    alert('Going to Configurator');
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <h1>BELIEBTE PRODUKTE</h1>

        <div className="foods">
          {items.map((item) => (
            <Card
              titel={item.titel}
              info={item.info}
              preis={item.preis}
              imageUrl={item.imageUrl}
              onSelect={onAddtoConfigurator}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
