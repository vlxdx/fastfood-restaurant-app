import styles from './Beilagen.module.scss';

function Beilagen() {
  return (
    <div className={styles.beilagen}>
      <div className={styles.beilagenText}>
        <h2>Beilagen</h2>
        <h1>Wählen Sie eine Beilage</h1>
        <p>
          Ipsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
          Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
          estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum
          Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor estIpsum Lorem dlor
          est
        </p>
        <div className={styles.configurator}>
          <div className={styles.auswaehl}>Auswähl:</div>
          <div className={styles.beilage}>
            <div className={styles.beilageName}>Fries:</div>
          </div>
        </div>
      </div>
      <div className={styles.beilageImg}>
        <img src="/img/fries.jpg" alt="Fries" width={400} />
      </div>
    </div>
  );
}

export default Beilagen;
