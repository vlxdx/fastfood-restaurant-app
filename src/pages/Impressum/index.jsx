import styles from './Impressum.module.scss';

function Impressum() {
  return (
    <div className={styles.impressum}>
      <h1>Impressum</h1>
      <h3>Verantwortlich:</h3>
      <ul>
        <li>Web-Entwickler Volodymyr Dunaiev</li>
        <li>
          <a href="mailto: volodymyr.dv@protonmail.com">
            E-Mail: volodymyr.dv@protonmail.com
          </a>
        </li>
        <li>
          <a href="https://github.com/vlxdx">
            GitHub: https://github.com/vlxdx
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/vdunaiev/">
            LinkedIn: https://www.linkedin.com/in/vdunaiev/
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Impressum;
