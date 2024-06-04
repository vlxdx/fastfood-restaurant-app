import styles from './Salate.module.scss';

function Salate() {
  return (
    <div className={styles.salate}>
      <div className={styles.salateText}>
        <h2>Salate</h2>
        <h1>Wählen Sie einen Salat</h1>
        <p>
          Ipsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
          Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
          estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
          Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
          est
        </p>
        <div className={styles.configurator}>
          <div className={styles.auswaehl}>Auswähl:</div>
          <div className={styles.salat}>
            <div className={styles.salatName}>Ceasar Salat:</div>
          </div>
        </div>
      </div>
      <div className={styles.salatImg}>
        <img src="/img/salad.jpg" alt="Salat" width={400} />
      </div>
    </div>
  );
}

export default Salate;
