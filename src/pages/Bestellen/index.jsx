import { Outlet, NavLink } from 'react-router-dom';
import styles from './Bestellen.module.scss';

function Bestellen() {
  return (
    <div className={styles.bestellen}>
      <div>
        <div className={styles.menu}>
          <div className={styles.topMenu}>
            <div className={styles.item}>
              <NavLink
                to="getraenke"
                className={(navData) =>
                  navData.isActive ? styles.active : styles.item
                }
              >
                <img src="/img/1.jpg" alt="Getränke" />
                <div>Getränke</div>
              </NavLink>
            </div>
            <div className={styles.item}>
              <NavLink
                to="sandwiches"
                className={(navData) =>
                  navData.isActive ? styles.active : styles.item
                }
              >
                <img src="/img/2.jpg" alt="Sandwiches" />
                <div>Sandwiches</div>
              </NavLink>
            </div>
            <div className={styles.item}>
              <NavLink
                to="burger"
                className={(navData) =>
                  navData.isActive ? styles.active : styles.item
                }
              >
                <img src="/img/3.jpg" alt="Burger" />
                <div>Burger</div>
              </NavLink>
            </div>
            <div className={styles.item}>
              <NavLink
                to="beilagen"
                className={(navData) =>
                  navData.isActive ? styles.active : styles.item
                }
              >
                <img src="/img/4.jpg" alt="Beilagen" />
                <div>Beilagen</div>
              </NavLink>
            </div>
            <div className={styles.item}>
              <NavLink
                to="salate"
                className={(navData) =>
                  navData.isActive ? styles.active : styles.item
                }
              >
                <img src="/img/5.jpg" alt="Salate" />
                <div>Salate</div>
              </NavLink>
            </div>
          </div>
          <div className={styles.centerMenu}>
            <h4>Ipsum Lorem</h4>
            <p>
              Ipsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
              Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem
              dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
              estIpsum
            </p>
          </div>
          <div className={styles.bottomMenu}>
            <h4>Dolor est</h4>
            <p>
              Ipsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
              Lorem dlor estIpsum Lorem dlor.
            </p>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Bestellen;
