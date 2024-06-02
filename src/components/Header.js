import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <Link to="/">
        <img width={77} height={77} src="/img/logo.png" alt="Logo" />
      </Link>
      <ul>
        <Link to="/bestellen">
          <li>Bestellen</li>
        </Link>
        <li>My Order</li>
      </ul>
      <h4 onClick={props.onClickCart} className="headerRight">
        <img width={45} height={38} src="/img/cart.svg" alt="Cart" />
        <span>TOTAL: 22,30 EUR</span>
      </h4>
    </header>
  );
}

export default Header;
