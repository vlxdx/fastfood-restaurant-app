import React, { useState } from 'react';
import styles from './Getraenke.module.scss';
import cola from '../../../assets/images/cola.jpg';
import btnPlus from '../../../assets/images/btn-plus.svg';
import btnMinus from '../../../assets/images/btn-minus.svg';
import btnDelete from '../../../assets/images/btn-delete.svg';

function Getraenke({ items, addToCart }) {
  const [quantities, setQuantities] = useState(
    items.reduce((acc, item) => {
      acc[item.Name] = 1;
      return acc;
    }, {})
  );

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
    <div className={styles.getraenke}>
      <div className={styles.getraenkeText}>
        <h2>Getränke</h2>
        <h1>Wählen Sie Ihr Getränk</h1>
        <p>
          Ipsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
          Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
          estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
          Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
          est
        </p>
        <div className={styles.configurator}>
          <div className={styles.auswahl}>Auswahl:</div>
          <div className={styles.drink}>
            <ul>
              {items.map((item) => (
                <li key={item.Name}>
                  <div>
                    <div className={styles.name}>{item.Name}</div>
                    <div>{item.Kcal} Kcal</div>
                    <i>Einzelpreis: {item.Preis.toFixed(2)} EUR</i>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.quantityPrice}>
                      <div>
                        <img
                          className={styles.removeBtn}
                          width={24}
                          src={btnDelete}
                          alt="Delete"
                          onClick={() => handleResetQuantity(item.Name)}
                        />
                      </div>
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
                        <div>
                          {(quantities[item.Name] * item.Preis).toFixed(2)}
                        </div>
                        <div>EUR</div>
                      </b>
                    </div>
                    <button onClick={() => addToCart(item)}>Hinzufügen</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.getraenkeImg}>
        <img src={cola} alt="Cola" width={300} />
      </div>
    </div>
  );
}

export default Getraenke;
