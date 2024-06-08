import React from 'react';
import styles from './Salate.module.scss';
import salad from '../../../assets/images/salad.jpg';

function Salate({ items, addToCart }) {
  return (
    <div className={styles.salate}>
      <div className={styles.salateText}>
        <h2>Salate</h2>
        <h1>Wählen Sie einen Salat</h1>
        <p>
          Ipsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
          Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
          estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
          Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
          est
        </p>
        <div className={styles.configurator}>
          <div className={styles.auswahl}>Auswahl:</div>
          <div className={styles.salat}>
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
      <div className={styles.salatImg}>
        <img src={salad} alt="Salat" width={400} />
      </div>
    </div>
  );
}

export default Salate;
