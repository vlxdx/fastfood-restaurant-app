import React, { useState } from 'react';
import styles from './Sandwiches.module.scss';
import sandwich from '../../../assets/images/sandwich.jpg';
import btnPlus from '../../../assets/images/btn-plus.svg';
import btnMinus from '../../../assets/images/btn-minus.svg';
import btnDelete from '../../../assets/images/btn-delete.svg';

function Sandwiches({
  items,
  addToCart,
  quantities,
  increaseQuantity,
  decreaseQuantity,
  handleResetQuantity,
}) {
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
                  <div className={styles.itemName}>{item.Name}</div>
                  <i>Grundpreis: {item.Preis.toFixed(2)} EUR</i>
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
                <div className={styles.info}>
                  <div className={styles.quantityPrice}>
                    <div>
                      <div className={styles.quantitySelector}>
                        <img
                          className={styles.removeBtn}
                          width={24}
                          src={btnMinus}
                          alt="Minus"
                          onClick={() => decreaseQuantity(item.Name)}
                        />
                        <span>{quantities[item.Name]}</span>
                        <img
                          className={styles.removeBtn}
                          width={24}
                          src={btnPlus}
                          alt="Plus"
                          onClick={() => increaseQuantity(item.Name)}
                        />
                      </div>
                    </div>
                    <b>{(quantities[item.Name] * item.Preis).toFixed(2)} EUR</b>
                  </div>
                  <button onClick={() => handleAddToCart(item)}>
                    Hinzufügen
                  </button>
                  <img
                    className={styles.removeBtn}
                    width={28}
                    src={btnDelete}
                    alt="Delete"
                    onClick={() => handleResetQuantity(item.Name)}
                  />
                </div>
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
