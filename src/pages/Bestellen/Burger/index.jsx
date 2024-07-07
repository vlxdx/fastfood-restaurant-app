import React, { useState } from 'react';
import styles from './Burger.module.scss';
import burger from '../../../assets/images/burger.jpg';
import btnPlus from '../../../assets/images/btn-plus.svg';
import btnMinus from '../../../assets/images/btn-minus.svg';
import btnDelete from '../../../assets/images/btn-delete.svg';
import { v4 as uuidv4 } from 'uuid';

function Burger({
  items,
  addToCart,
  quantities,
  increaseQuantity,
  decreaseQuantity,
  handleResetQuantity,
}) {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (itemName, optionType, optionValue) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [itemName]: {
        ...prevState[itemName],
        [optionType]: optionValue,
      },
    }));
  };

  const calculatePrice = (item) => {
    const options = selectedOptions[item.Name];
    let additionalCost = 0;

    if (options) {
      if (options.Bun) {
        const bunOption = item.Buns.find((bun) => bun.Name === options.Bun);
        additionalCost += bunOption ? bunOption.Preis : 0;
      }

      if (options.Toppings) {
        options.Toppings.forEach((toppingName) => {
          const toppingOption = item.Toppings.find(
            (topping) => topping.Name === toppingName
          );
          additionalCost += toppingOption ? toppingOption.Preis : 0;
        });
      }

      if (options.Dressings) {
        options.Dressings.forEach((dressingName) => {
          const dressingOption = item.Dressings.find(
            (dressing) => dressing.Name === dressingName
          );
          additionalCost += dressingOption ? dressingOption.Preis : 0;
        });
      }
    }

    return item.Preis + additionalCost;
  };

  const handleAddToCart = (item) => {
    const options = selectedOptions[item.Name];
    if (options && options.Bun) {
      const finalPrice = calculatePrice(item);
      const uniqueId = uuidv4();
      addToCart({ ...item, options, Preis: finalPrice, id: uniqueId });

      setSelectedOptions((prevState) => ({
        ...prevState,
        [item.Name]: {},
      }));
    } else {
      alert('Bitte wählen Sie die Art des Buns. Danke!');
    }
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
              <div key={uuidv4()}>
                <div className={styles.burgerHeader}>
                  <div className={styles.itemName}>{item.Name}</div>
                  <i>Grundpreis: {item.Preis.toFixed(2)} EUR</i>
                </div>
                <div>
                  <label>Buns:</label>
                  {item.Buns.map((bun) => (
                    <div key={bun.Name} className={styles.option}>
                      <div>
                        <input
                          type="radio"
                          name={`bun-${item.Name}`}
                          value={bun.Name}
                          checked={selectedOptions[item.Name]?.Bun === bun.Name}
                          onChange={(e) =>
                            handleOptionChange(item.Name, 'Bun', e.target.value)
                          }
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
                          name={`topping-${item.Name}`}
                          value={topping.Name}
                          checked={
                            selectedOptions[item.Name]?.Toppings?.includes(
                              topping.Name
                            ) || false
                          }
                          onChange={(e) =>
                            handleOptionChange(
                              item.Name,
                              'Toppings',
                              e.target.checked
                                ? [
                                    ...(selectedOptions[item.Name]?.Toppings ||
                                      []),
                                    topping.Name,
                                  ]
                                : selectedOptions[item.Name]?.Toppings.filter(
                                    (t) => t !== topping.Name
                                  )
                            )
                          }
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
                          name={`dressing-${item.Name}`}
                          value={dressing.Name}
                          checked={
                            selectedOptions[item.Name]?.Dressings?.includes(
                              dressing.Name
                            ) || false
                          }
                          onChange={(e) =>
                            handleOptionChange(
                              item.Name,
                              'Dressings',
                              e.target.checked
                                ? [
                                    ...(selectedOptions[item.Name]?.Dressings ||
                                      []),
                                    dressing.Name,
                                  ]
                                : selectedOptions[item.Name]?.Dressings.filter(
                                    (d) => d !== dressing.Name
                                  )
                            )
                          }
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
                    <b>
                      {(quantities[item.Name] * calculatePrice(item)).toFixed(
                        2
                      )}{' '}
                      EUR
                    </b>
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
      <div className={styles.burgersImg}>
        <img src={burger} alt="Burger" width={300} />
      </div>
    </div>
  );
}

export default Burger;
