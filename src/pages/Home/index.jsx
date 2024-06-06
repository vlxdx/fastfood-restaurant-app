import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '../../components/Card';
import styles from './Home.module.scss';

function Home() {
  const [homeItems, setHomeItems] = useState([]);

  useEffect(() => {
    axios
      .get('https://6659e945de346625136e669b.mockapi.io/items')
      .then((res) => {
        setHomeItems(res.data);
      });
  }, []);

  return (
    <div className={styles.content}>
      <h1>UNSER MENÜ</h1>
      <div className={styles.menu}>
        <Link to="/bestellen/sandwiches">
          <div className={styles.item}>Sandwiches</div>
        </Link>
        <Link to="/bestellen/burger">
          <div className={styles.item}>Burger</div>
        </Link>
        <Link to="/bestellen/beilagen">
          <div className={styles.item}>Beilagen</div>
        </Link>
        <Link to="/bestellen/salate">
          <div className={styles.item}>Salate</div>
        </Link>
        <Link to="/bestellen/getraenke">
          <div className={styles.item}>Getränke</div>
        </Link>
      </div>

      <div className={styles.foods}>
        {homeItems.map((homeItem, titel) => (
          <Card
            key={titel}
            titel={homeItem.titel}
            info={homeItem.info}
            preis={homeItem.preis}
            imageUrl={homeItem.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
