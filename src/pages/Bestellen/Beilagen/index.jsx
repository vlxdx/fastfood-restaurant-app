import React, { useEffect, useState } from 'react';
import styles from './Beilagen.module.scss';
import fries from '../../../assets/images/fries.jpg';
import btnPlus from '../../../assets/images/btn-plus.svg';
import btnMinus from '../../../assets/images/btn-minus.svg';
import btnDelete from '../../../assets/images/btn-delete.svg';
import { v4 as uuidv4 } from 'uuid';

function Beilagen({
  items,
  addToCart,
  quantities,
  increaseQuantity,
  decreaseQuantity,
  handleResetQuantity,
}) {
  const [itemsWithId, setItemsWithId] = useState([]);

  useEffect(() => {
    const itemsWithUniqueIds = items.map((item) => ({
      ...item,
      id: uuidv4(),
    }));
    setItemsWithId(itemsWithUniqueIds);
  }, [items]);

  return (
    <div className={styles.beilagen}>
      <div className={styles.beilagenText}>
        <h2>Beilagen</h2>
        <h1>Wählen Sie eine Beilage</h1>
        <p>
          Ipsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
          Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
          estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
          Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
          est
        </p>
        <div className={styles.configurator}>
          <div className={styles.auswahl}>Auswahl:</div>
          <div className={styles.beilage}>
            <ul>
              {itemsWithId.map((item) => (
                <li key={item.id}>
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
      <div className={styles.beilagenImg}>
        <img src={fries} alt="Fries" width={300} />
      </div>
    </div>
  );
}

export default Beilagen;
