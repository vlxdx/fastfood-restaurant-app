import { Route, Routes, Link } from 'react-router-dom';
import styles from './Bestellen.module.scss';
import Getraenke from './Getraenke';
import Bestellauswahl from './Bestellauswahl';
import Sandwiches from './Sandwiches';
import Burger from './Burger';
import Beilagen from './Beilagen';
import Salate from './Salate';

function Bestellen() {
  return (
    <div className={styles.bestellen}>
      <div>
        <div className={styles.menu}>
          <div className={styles.topMenu}>
            <Link
              to="getraenke"
              style={{ color: '#323232', textAlign: 'center' }}
            >
              <div>
                <img src="/img/1.jpg" alt="Getränke" />
                <div>Getränke</div>
              </div>
            </Link>
            <Link
              to="sandwiches"
              style={{ color: '#323232', textAlign: 'center' }}
            >
              <div>
                <img src="/img/2.jpg" alt="Sandwiches" />
                <div>Sandwiches</div>
              </div>
            </Link>
            <Link to="burger" style={{ color: '#323232', textAlign: 'center' }}>
              <div>
                <img src="/img/3.jpg" alt="Burger" />
                <div>Burger</div>
              </div>
            </Link>
            <Link
              to="beilagen"
              style={{ color: '#323232', textAlign: 'center' }}
            >
              <div>
                <img src="/img/4.jpg" alt="Beilagen" />
                <div>Beilagen</div>
              </div>
            </Link>
            <Link to="salate" style={{ color: '#323232', textAlign: 'center' }}>
              <div>
                <img src="/img/5.jpg" alt="Salate" />
                <div>Salate</div>
              </div>
            </Link>
          </div>
          <div className={styles.centerMenu}>
            <h4>Ipsum Lorem</h4>
            <p>
              Ipsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
              Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem
              dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
              estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
              estIpsum Lorem dlor est
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

      <Routes>
        <Route path="/" element={<Bestellauswahl />} />
        <Route path="getraenke" element={<Getraenke />} />
        <Route path="sandwiches" element={<Sandwiches />} />
        <Route path="burger" element={<Burger />} />
        <Route path="beilagen" element={<Beilagen />} />
        <Route path="salate" element={<Salate />} />
      </Routes>
    </div>
  );
}

export default Bestellen;
