import React from 'react';
import styles from './Cart.module.scss';
import btnRemove from '../../assets/images/btn-remove.svg';
import emptyCart from '../../assets/images/empty-cart.png';
import arrow from '../../assets/images/arrow.svg';
import btnPlus from '../../assets/images/btn-plus.svg';
import btnMinus from '../../assets/images/btn-minus.svg';
import btnDelete from '../../assets/images/btn-delete.svg';

function Cart({
  cart,
  onClose,
  addToCart,
  removeUnitFromCart,
  removeFromCart,
}) {
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
            width={32}
            src={btnRemove}
            alt="Entfernen"
          />
        </h2>

        {cart.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
            <div className={styles.items}>
              {cart.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <div>
                    <div>{item.Name}</div>
                    <i>Einzelpreis: {item.Preis.toFixed(2)} EUR</i>
                  </div>
                  <div className={styles.quantityPrice}>
                    <div>
                      <img
                        onClick={() => removeFromCart(item)}
                        className={styles.removeBtn}
                        width={24}
                        src={btnDelete}
                        alt="Delete"
                      />
                    </div>
                    <div>
                      <div className={styles.quantitySelector}>
                        <img
                          onClick={() => removeUnitFromCart(item)}
                          className={styles.removeBtn}
                          width={24}
                          src={btnMinus}
                          alt="Minus"
                        />
                        <span>{item.quantity}</span>
                        <img
                          onClick={() => addToCart(item)}
                          className={styles.removeBtn}
                          width={24}
                          src={btnPlus}
                          alt="Plus"
                        />
                      </div>
                    </div>
                    <b>
                      <div>{(item.quantity * item.Preis).toFixed(2)}</div>
                      <div>EUR</div>
                    </b>
                  </div>
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
