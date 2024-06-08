import React, { useState } from 'react';
import styles from './Burger.module.scss';
import burger from '../../../assets/images/burger.jpg';

function Burger({ items, addToCart }) {
  const [selectedBun, setSelectedBun] = useState('');
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedDressings, setSelectedDressings] = useState([]);

  const handleToppingChange = (e) => {
    const { value, checked } = e.target;
    setSelectedToppings((prev) =>
      checked ? [...prev, value] : prev.filter((topping) => topping !== value)
    );
  };

  const handleDressingChange = (e) => {
    const { value, checked } = e.target;
    setSelectedDressings((prev) =>
      checked ? [...prev, value] : prev.filter((dressing) => dressing !== value)
    );
  };

  const handleAddToCart = (item) => {
    const itemWithOptions = {
      ...item,
      options: {
        bun: selectedBun,
        toppings: selectedToppings,
        dressings: selectedDressings,
      },
    };
    addToCart(itemWithOptions);
  };

  return (
    <div className={styles.burgers}>
      <div className={styles.burgersText}>
        <h2>Burger</h2>
        <h1>Definiere Ihren Burger</h1>
        <p>
          Ipsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
          Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
          estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
          Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
          est
        </p>
        <div className={styles.configurator}>
          <div className={styles.auswahl}>Auswahl:</div>
          <div className={styles.burger}>
            {items.map((item) => (
              <div key={item.Name}>
                <h2>{item.Name}</h2>
                <div>
                  <label>Buns:</label>
                  {item.Buns.map((bun) => (
                    <div key={bun}>
                      <input
                        type="radio"
                        name="bun"
                        value={bun}
                        onChange={(e) => setSelectedBun(e.target.value)}
                      />
                      {bun}
                    </div>
                  ))}
                </div>
                <div>
                  <label>Toppings:</label>
                  {item.Toppings.map((topping) => (
                    <div key={topping.Name}>
                      <input
                        type="checkbox"
                        value={topping.Name}
                        onChange={handleToppingChange}
                      />
                      {topping.Name} (+€{topping.Preis.toFixed(2)})
                    </div>
                  ))}
                </div>
                <div>
                  <label>Dressings:</label>
                  {item.Dressings.map((dressing) => (
                    <div key={dressing}>
                      <input
                        type="checkbox"
                        value={dressing}
                        onChange={handleDressingChange}
                      />
                      {dressing}
                    </div>
                  ))}
                </div>
                <button onClick={() => handleAddToCart(item)}>
                  Hinzufügen
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.burgerImg}>
        <img src={burger} alt="Burger" width={400} />
      </div>
    </div>
  );
}

export default Burger;
