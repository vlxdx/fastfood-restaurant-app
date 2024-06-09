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
        <img src={salad} alt="Salat" width={400} />
      </div>
    </div>
  );
}

export default Salate;
