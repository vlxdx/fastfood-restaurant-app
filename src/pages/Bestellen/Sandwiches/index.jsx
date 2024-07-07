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
      if (options.Länge) {
        const lengthOption = item.Laenge.find(
          (length) => length.Name === options.Länge
        );
        additionalCost += lengthOption ? lengthOption.Preis : 0;
      }

      if (options.Brotart) {
        const breadOption = item.Brotart.find(
          (bread) => bread.Name === options.Brotart
        );
        additionalCost += breadOption ? breadOption.Preis : 0;
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
    if (options && options.Länge && options.Brotart) {
      const finalPrice = calculatePrice(item);
      addToCart({ ...item, options, Preis: finalPrice });

      setSelectedOptions((prevState) => ({
        ...prevState,
        [item.Name]: {},
      }));
    } else {
      alert('Bitte wählen Sie die Sandwichlänge und die Brotart. Danke!');
    }
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
                          name={`length-${item.Name}`}
                          value={length.Name}
                          checked={
                            selectedOptions[item.Name]?.Länge === length.Name
                          }
                          onChange={(e) =>
                            handleOptionChange(
                              item.Name,
                              'Länge',
                              e.target.value
                            )
                          }
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
                          name={`bread-${item.Name}`}
                          value={bread.Name}
                          checked={
                            selectedOptions[item.Name]?.Brotart === bread.Name
                          }
                          onChange={(e) =>
                            handleOptionChange(
                              item.Name,
                              'Brotart',
                              e.target.value
                            )
                          }
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
      <div className={styles.sandwichesImg}>
        <img src={sandwich} alt="Sandwich" width={300} />
      </div>
    </div>
  );
}

export default Sandwiches;
