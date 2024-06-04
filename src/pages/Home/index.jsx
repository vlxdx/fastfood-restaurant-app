import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import styles from './Home.module.scss';

function Home({ items }) {
  return (
    <div className={styles.content}>
      <h1>UNSER MENÜ</h1>
      <div className={styles.menu}>
        <Link to="/bestellen/sandwiches">
          <div style={{ color: '#323232' }}>Sandwiches</div>
        </Link>
        <Link to="/bestellen/burger">
          <div style={{ color: '#323232' }}>Burger</div>
        </Link>
        <Link to="/bestellen/beilagen">
          <div style={{ color: '#323232' }}>Beilagen</div>
        </Link>
        <Link to="/bestellen/salate">
          <div style={{ color: '#323232' }}>Salate</div>
        </Link>
        <Link to="/bestellen/getraenke">
          <div style={{ color: '#323232' }}>Getränke</div>
        </Link>
      </div>

      <div className={styles.foods}>
        {items.map((item, titel) => (
          <Card
            key={titel}
            titel={item.titel}
            info={item.info}
            preis={item.preis}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
