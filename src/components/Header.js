function Header(props) {
  return (
    <header>
      <div className="headerLeft">
        <img width={77} height={77} src="/img/logo.png" alt="Logo" />
        <div>
          <ul>
            <li>Bestellen</li>
            <li>My Order</li>
          </ul>
        </div>
      </div>
      <h4 onClick={props.onClickCart} className="headerRight">
        <img width={37} height={37} src="/img/cart.svg" alt="Cart" />
        <span>TOTAL: 22,30 EUR</span>
      </h4>
    </header>
  );
}

export default Header;
