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
                <div className={styles.burgerHeader}>
                  {item.Name}
                  <span className={styles.burgerPreis}>
                    - {item.Preis.toFixed(2)} EUR
                  </span>
                </div>
                <div>
                  <label>Buns:</label>
                  {item.Buns.map((bun) => (
                    <div key={bun.Name} className={styles.option}>
                      <div>
                        <input
                          type="radio"
                          name="bun"
                          value={bun.Name}
                          onChange={(e) => setSelectedBun(e.target.value)}
                        />
                        <span className={styles.name}>{bun.Name}</span>,{' '}
                        {bun.Kcal} Kcal
                      </div>
                      <div className={styles.preis}>
                        + {bun.Preis.toFixed(2)} EUR
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
      <div className={styles.burgersImg}>
        <img src={burger} alt="Burger" width={300} />
      </div>
    </div>
  );
}

export default Burger;
