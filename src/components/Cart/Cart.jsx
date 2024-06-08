import React from 'react';
import styles from './Cart.module.scss';
import btnRemove from '../../assets/images/btn-remove.svg';
import emptyCart from '../../assets/images/empty-cart.png';
import arrow from '../../assets/images/arrow.svg';

function Cart({ cart, removeFromCart, onClose }) {
  const total = cart
    .reduce((sum, item) => sum + item.quantity * item.Preis, 0)
    .toFixed(2);

  const steuer = (total / 100) * 7;

  return (
    <div className={styles.overlay}>
      <div className={styles.cart}>
        <h2>
          Warenkorb
          <img
            onClick={onClose}
            className={styles.removeBtn}
            src={btnRemove}
            alt="Entfernen"
          />
        </h2>

        {cart.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
            <div className={styles.items}>
              {cart.map((item) => (
                <div key={item.Name} className={styles.cartItem}>
                  <div>
                    {item.Name} - {item.quantity} x {item.Preis.toFixed(2)} EUR
                  </div>
                  <img
                    onClick={() => removeFromCart(item)}
                    className={styles.removeBtn}
                    src={btnRemove}
                    alt="Löschen"
                  />
                </div>
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
                  <b>{steuer.toFixed(2)} EUR</b>
                </li>
              </ul>
              <button className={styles.orangeButton}>
                Weiter zur Kasse <img src={arrow} alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.cartEmpty}>
            <img width="120px" height="120px" src={emptyCart} alt="Empty" />
            <h2>Ihr Warenkorb ist leer</h2>
            <p>Weiter einkaufen</p>
            <button onClick={onClose} className={styles.orangeButton}>
              <img src={arrow} alt="Arrow" />
              Zurück
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
