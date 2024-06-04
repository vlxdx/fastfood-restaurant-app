import React, { useState } from 'react';
import styles from './Getraenke.module.scss';

function Getraenke() {
  const [countCola, setCountCola] = useState(0);
  const [countFanta, setCountFanta] = useState(0);

  const handleIncreaseCountCola = (event) => {
    setCountCola((prevValue) => (prevValue >= 100 ? 100 : prevValue + 1));
  };

  const handleDecreaseCountCola = (event) => {
    setCountCola((prevValue) => (prevValue <= 0 ? 0 : prevValue - 1));
  };

  const handleIncreaseCountFanta = (event) => {
    setCountFanta((prevValue) => (prevValue >= 100 ? 100 : prevValue + 1));
  };

  const handleDecreaseCountFanta = (event) => {
    setCountFanta((prevValue) => (prevValue <= 0 ? 0 : prevValue - 1));
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
          <div className={styles.auswaehl}>Auswähl:</div>
          <div className={styles.drink}>
            <div className={styles.drinkName}>Cola:</div>
            <div className={styles.buttons}>
              <div>
                <button className={styles.buttonHinzufuegen}>Hinzufügen</button>
              </div>
              <div className={styles.buttonCounter}>
                <button
                  onClick={handleIncreaseCountCola}
                  className={styles.buttonPlus}
                >
                  +
                </button>
                <input
                  type="numer"
                  value={countCola}
                  readOnly
                  className={styles.input}
                />
                <button
                  onClick={handleDecreaseCountCola}
                  className={styles.buttonMinus}
                >
                  -
                </button>
              </div>
              <div>
                <button className={styles.buttonLoeschen}>Löschen</button>
              </div>
            </div>
          </div>
          <div className={styles.drink}>
            <div className={styles.drinkName}>Fanta:</div>
            <div className={styles.buttons}>
              <div>
                <button className={styles.buttonHinzufuegen}>Hinzufügen</button>
              </div>
              <div className={styles.buttonCounter}>
                <button
                  onClick={handleIncreaseCountFanta}
                  className={styles.buttonPlus}
                >
                  +
                </button>
                <input
                  type="numer"
                  value={countFanta}
                  readOnly
                  className={styles.input}
                />
                <button
                  onClick={handleDecreaseCountFanta}
                  className={styles.buttonMinus}
                >
                  -
                </button>
              </div>
              <div>
                <button className={styles.buttonLoeschen}>Löschen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.getraenkeImg}>
        <img src="/img/cola.jpg" alt="Cola" width={400} />
      </div>
    </div>
  );
}

export default Getraenke;
