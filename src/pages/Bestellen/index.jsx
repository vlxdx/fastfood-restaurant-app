import { Outlet, NavLink } from 'react-router-dom';
import styles from './Bestellen.module.scss';
import getraenke from '../../assets/images/1.jpg';
import sandwiches from '../../assets/images/2.jpg';
import burger from '../../assets/images/3.jpg';
import beilagen from '../../assets/images/4.jpg';
import salate from '../../assets/images/5.jpg';

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
                <img src={getraenke} alt="Getränke" />
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
                <img src={sandwiches} alt="Sandwiches" />
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
                <img src={burger} alt="Burger" />
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
                <img src={beilagen} alt="Beilagen" />
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
                <img src={salate} alt="Salate" />
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
