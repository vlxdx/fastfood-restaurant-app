import styles from './Bestellauswahl.module.scss';
import burgers from '../../../assets/images/burgers.jpg';

function Bestellauswahl() {
  return (
    <div className={styles.bestellauswahl}>
      <div>Wählen Sie links aus, was Sie essen oder trinken möchten</div>
      <img src={burgers} alt="Burgers" width={500} />
    </div>
  );
}

export default Bestellauswahl;
