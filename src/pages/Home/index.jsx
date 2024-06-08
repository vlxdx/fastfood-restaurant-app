import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import sandwich from '../../assets/images/sandwiches.png';
import burger from '../../assets/images/burger.png';
import beilage from '../../assets/images/beilagen.png';
import salat from '../../assets/images/salate.png';
import getraenk from '../../assets/images/getraenke.png';

function Home() {
  return (
    <div className={styles.content}>
      <h1>UNSER MENÜ</h1>

      <div className={styles.foods}>
        <div className={styles.card}>
          <img width={160} height={160} src={sandwich} alt="Sandwich" />
          <p className={styles.titel}>Gute Sandwiches</p>
          <div>
            <div>
              <p className={styles.info}>Mit verschiedenen Toppings</p>
              <b>Ab 9,20 EUR</b>
              <Link to="/bestellen/sandwiches">
                <button>Auswählen</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img width={160} height={160} src={burger} alt="Burger" />
          <p className={styles.titel}>Saftige Burger</p>
          <div>
            <div>
              <p className={styles.info}>Eine Vielzahl saftiger Burger</p>
              <b>Ab 10,50 EUR</b>
              <Link to="/bestellen/burger">
                <button>Auswählen</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img width={160} height={160} src={beilage} alt="Beilage" />
          <p className={styles.titel}>Leckere Beilagen</p>
          <div>
            <div>
              <p className={styles.info}>Knusprige Pommes, Reis und mehr</p>
              <b>Ab 1,20 EUR</b>
              <Link to="/bestellen/beilagen">
                <button>Auswählen</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img width={160} height={160} src={salat} alt="Salat" />
          <p className={styles.titel}>Gesunde Salate</p>
          <div>
            <div>
              <p className={styles.info}>Mit einer leckeren Salatmischung</p>
              <b>Ab 7,50 EUR</b>
              <Link to="/bestellen/salate">
                <button>Auswählen</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img width={160} height={160} src={getraenk} alt="Getränk" />
          <p className={styles.titel}>Kühle Getränke</p>
          <div>
            <div>
              <p className={styles.info}>Cola, Fanta, Sprite 0,5l Einweg</p>
              <b>Ab 1,20 EUR</b>
              <Link to="/bestellen/getraenke">
                <button>Auswählen</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
