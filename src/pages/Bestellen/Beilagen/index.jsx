import React from 'react';
import styles from './Beilagen.module.scss';
import fries from '../../../assets/images/fries.jpg';

function Beilagen({ items, addToCart }) {
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
              {items.map((item) => (
                <li key={item.Name}>
                  {item.Name} - {item.Preis.toFixed(2)} EUR
                  <button onClick={() => addToCart(item)}>Hinzufügen</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.beilageImg}>
        <img src={fries} alt="Fries" width={400} />
      </div>
    </div>
  );
}

export default Beilagen;
