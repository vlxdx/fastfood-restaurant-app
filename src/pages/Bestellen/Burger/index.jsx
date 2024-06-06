import styles from './Burger.module.scss';

function Burger() {
  return (
    <div className={styles.burgers}>
      <div className={styles.burgersText}>
        <h2>Burger</h2>
        <h1>Definiere Ihren Burger</h1>
        <p>
          Ipsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
          Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
          estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
          Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
          est
        </p>
        <div className={styles.configurator}>
          <div className={styles.auswahl}>Auswahl:</div>
          <div className={styles.burger}>
            <div className={styles.burgerName}>Burger:</div>
          </div>
        </div>
      </div>
      <div className={styles.burgerImg}>
        <img src="/img/burger.jpg" alt="Burger" width={400} />
      </div>
    </div>
  );
}

export default Burger;
