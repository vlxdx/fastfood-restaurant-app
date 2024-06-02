function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Warenkorb
          <img
            onClick={onClose}
            style={{ cursor: 'pointer' }}
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div className="cartItem">
              <div
                style={{ backgroundImage: `url({obj.imageUrl})` }}
                className="cartItemImg"
              ></div>

              <div className="food">
                <p>{obj.titel}</p>
                <b>{obj.preis}</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          ))}
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Gesamtpreis:</span>
              <div></div>
              <b>100,00 EUR</b>
            </li>
            <li>
              <span>MwSt.:</span>
              <div></div>
              <b>7,00 EUR</b>
            </li>
          </ul>
          <button className="orangeButton">
            Kaufen <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
