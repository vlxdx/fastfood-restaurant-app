import React from 'react';
import styles from './Getraenke.module.scss';
import cola from '../../../assets/images/cola.jpg';

function Getraenke({ items, addToCart }) {
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
                  {item.Name} - {item.Preis.toFixed(2)} EUR
                  <button onClick={() => addToCart(item)}>Hinzufügen</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.getraenkeImg}>
        <img src={cola} alt="Cola" width={400} />
      </div>
    </div>
  );
}

export default Getraenke;
