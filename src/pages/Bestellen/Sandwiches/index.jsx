import styles from './Sandwiches.module.scss';

function Sandwiches() {
  return (
    <div className={styles.sandwiches}>
      <div className={styles.sandwichesText}>
        <h2>Sandwiches</h2>
        <h1>Definiere Ihr Sandwich</h1>
        <p>
          Ipsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
          Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
          estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
          Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
          est
        </p>
        <div className={styles.configurator}>
          <div className={styles.auswahl}>Auswahl:</div>
          <div className={styles.sandwich}>
            <div className={styles.sandwichName}>Sandwich:</div>
          </div>
        </div>
      </div>
      <div className={styles.sandwichImg}>
        <img src="/img/sandwich.jpg" alt="Sandwich" width={400} />
      </div>
    </div>
  );
}

export default Sandwiches;
