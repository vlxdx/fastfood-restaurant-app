import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Header(props) {
  return (
    <header>
      <Link to="/">
        <img width={77} height={77} src="/img/logo.png" alt="Logo" />
      </Link>
      <div className={styles.headerCenter}>
        <Link to="/bestellen">
          <div style={{ color: '#323232' }}>Bestellen</div>
        </Link>
        <div className={styles.myOrder}>My Order</div>
      </div>
      <div onClick={props.onClickCart} className={styles.headerRight}>
        <img width={45} height={38} src="/img/cart.svg" alt="Cart" />
        <span>TOTAL: 22,30 EUR</span>
      </div>
    </header>
  );
}

export default Header;
