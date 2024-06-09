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
                  <div>
                    <div className={styles.name}>{item.Name}</div>
                    <div>{item.Kcal} Kcal</div>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.preis}>
                      {item.Preis.toFixed(2)} EUR
                    </div>
                    <button onClick={() => addToCart(item)}>Hinzufügen</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <img src={cola} alt="Cola" width={400} />
      </div>
    </div>
  );
}

export default Getraenke;
