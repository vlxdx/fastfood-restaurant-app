import styles from './Bestellauswahl.module.scss';

function Bestellauswahl() {
  return (
    <div className={styles.bestellauswahl}>
      Wählen Sie links aus, was Sie essen oder trinken möchten
      <img src="/img/burgers.jpg" alt="Burgers" width={500} />
    </div>
  );
}

export default Bestellauswahl;
