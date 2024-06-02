import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <div>BIG BUNS | 2024</div>
      <Link to="/impressum" style={{ color: '#fff' }}>
        <div>IMPRESSUM</div>
      </Link>
      <div>KONTAKT</div>
    </div>
  );
}

export default Footer;
