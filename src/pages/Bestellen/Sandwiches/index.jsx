import React, { useState } from 'react';
import styles from './Sandwiches.module.scss';
import sandwich from '../../../assets/images/sandwich.jpg';

function Sandwiches({ items, addToCart }) {
  const [selectedLength, setSelectedLength] = useState('');
  const [selectedBread, setSelectedBread] = useState('');
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
        length: selectedLength,
        bread: selectedBread,
        toppings: selectedToppings,
        dressings: selectedDressings,
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
                <div className={styles.sandwichHeader}>
                  {item.Name}
                  <span className={styles.sandwichPreis}>
                    - {item.Preis.toFixed(2)} EUR
                  </span>
                </div>
                <div>
                  <label>Länge:</label>
                  {item.Laenge.map((length) => (
                    <div key={length.Name} className={styles.option}>
                      <div>
                        <input
                          type="radio"
                          name="length"
                          value={length.Name}
                          onChange={(e) => setSelectedLength(e.target.value)}
                        />
                        <span className={styles.name}>{length.Name}</span>,{' '}
                        {length.Kcal} Kcal
                      </div>
                      <div className={styles.preis}>
                        + {length.Preis.toFixed(2)} EUR
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <label>Brotart:</label>
                  {item.Brotart.map((bread) => (
                    <div key={bread.Name} className={styles.option}>
                      <div>
                        <input
                          type="radio"
                          name="bread"
                          value={bread.Name}
                          onChange={(e) => setSelectedBread(e.target.value)}
                        />
                        <span className={styles.name}>{bread.Name}</span>,{' '}
                        {bread.Kcal} Kcal
                      </div>
                      <div className={styles.preis}>
                        + {bread.Preis.toFixed(2)} EUR
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <label>Toppings:</label>
                  {item.Toppings.map((topping) => (
                    <div key={topping.Name} className={styles.option}>
                      <div>
                        <input
                          type="checkbox"
                          value={topping.Name}
                          onChange={handleToppingChange}
                        />
                        <span className={styles.name}>{topping.Name}</span>,{' '}
                        {topping.Kcal} Kcal
                      </div>
                      <div className={styles.preis}>
                        + {topping.Preis.toFixed(2)} EUR
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <label>Dressings:</label>
                  {item.Dressings.map((dressing) => (
                    <div key={dressing.Name} className={styles.option}>
                      <div>
                        <input
                          type="checkbox"
                          value={dressing.Name}
                          onChange={handleDressingChange}
                        />
                        <span className={styles.name}>{dressing.Name}</span>,{' '}
                        {dressing.Kcal} Kcal
                      </div>
                      <div className={styles.preis}>
                        + {dressing.Preis.toFixed(2)} EUR
                      </div>
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
      <div className={styles.sandwichesImg}>
        <img src={sandwich} alt="Sandwich" width={300} />
      </div>
    </div>
  );
}

export default Sandwiches;
