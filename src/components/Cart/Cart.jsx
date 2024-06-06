import React from 'react';
import styles from './Cart.module.scss';

function Cart({ onClose, cart = [] }) {
  const total = cart
    .reduce((sum, item) => sum + item.quantity * item.Preis, 0)
    .toFixed(2);

  return (
    <div className={styles.overlay}>
      <div className={styles.cart}>
        <h2>
          Warenkorb
          <img
            onClick={onClose}
            style={{ cursor: 'pointer' }}
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        {cart.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
            <div className={styles.items}>
              {cart.map((item) => (
                <li key={item.Name}>
                  {item.Name} - {item.quantity} x €{item.Preis.toFixed(2)}
                </li>
              ))}
            </div>

            <div className={styles.cartTotalBlock}>
              <ul>
                <li>
                  <span>Gesamtpreis:</span>
                  <div></div>
                  <b>{total} EUR</b>
                </li>
                <li>
                  <span>inkl. MwSt.:</span>
                  <div></div>
                  <b>7,00 EUR</b>
                </li>
              </ul>
              <button className={styles.orangeButton}>
                Weiter zur Kasse <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.cartEmpty}>
            <img
              width="120px"
              height="120px"
              src="/img/empty-cart.png"
              alt="Empty"
            />
            <h2>Ihr Warenkorb ist leer</h2>
            <p>Weiter einkaufen</p>
            <button onClick={onClose} className={styles.orangeButton}>
              <img src="/img/arrow.svg" alt="Arrow" />
              Zurück
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
