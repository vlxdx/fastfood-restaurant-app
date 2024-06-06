import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useCart } from '../../hooks/useCart';

function Header(props) {
  const { total } = useCart();

  return (
    <header>
      <Link to="/">
        <img width={77} height={77} src="/img/logo.png" alt="Logo" />
      </Link>
      <div className={styles.headerCenter}>
        <Link to="/bestellen">
          <div className={styles.item}>Bestellen</div>
        </Link>
        <div className={styles.myOrder}>My Order</div>
      </div>
      <div onClick={props.onClickCart} className={styles.headerRight}>
        <img width={45} height={38} src="/img/cart.svg" alt="Cart" />
        <div>
          TOTAL: <span>{total} EUR</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
