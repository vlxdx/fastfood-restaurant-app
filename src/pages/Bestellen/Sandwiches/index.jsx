import React, { useState } from 'react';
import styles from './Sandwiches.module.scss';
import sandwich from '../../../assets/images/sandwich.jpg';

function Sandwiches({ items, addToCart }) {
  const [selectedBread, setSelectedBread] = useState('');
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedDressing, setSelectedDressing] = useState('');

  const handleToppingChange = (e) => {
    const { value, checked } = e.target;
    setSelectedToppings((prev) =>
      checked ? [...prev, value] : prev.filter((topping) => topping !== value)
    );
  };

  const handleAddToCart = (item) => {
    const itemWithOptions = {
      ...item,
      options: {
        bread: selectedBread,
        toppings: selectedToppings,
        dressing: selectedDressing,
      },
    };
    addToCart(itemWithOptions);
  };

  return (
    <div className={styles.sandwiches}>
      <div className={styles.sandwichesText}>
        <h2>Sandwiches</h2>
        <h1>Definiere Ihr Sandwich</h1>
        <p>
          Ipsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
          Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
          estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
          Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
          est
        </p>
        <div className={styles.configurator}>
          <div className={styles.auswahl}>Auswahl:</div>
          <div className={styles.sandwich}>
            {items.map((item) => (
              <div key={item.Name}>
                <h2>{item.Name}</h2>
                <div>
                  <label>Brotart:</label>
                  {item.Brotart.map((bread) => (
                    <div key={bread}>
                      <input
                        type="radio"
                        name="bread"
                        value={bread}
                        onChange={(e) => setSelectedBread(e.target.value)}
                      />
                      {bread}
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
                        type="radio"
                        name="dressing"
                        value={dressing}
                        onChange={(e) => setSelectedDressing(e.target.value)}
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
      <div className={styles.sandwichImg}>
        <img src={sandwich} alt="Sandwich" width={400} />
      </div>
    </div>
  );
}

export default Sandwiches;
