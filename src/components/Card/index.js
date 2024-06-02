import styles from './Card.module.scss';

function Card({ imageUrl, titel, info, preis, onSelect }) {
  return (
    <div className={styles.card}>
      <img width={120} height={120} src={imageUrl} alt="Essen" />
      <p className={styles.titel}>{titel}</p>
      <div>
        <div>
          <p className={styles.info}>{info}</p>
          <b>{preis}</b>
        </div>
        <button className={styles.button} onClick={onSelect}>
          Auswählen
        </button>
      </div>
    </div>
  );
}

export default Card;
