import styles from './Card.module.scss';

function Card({ imageUrl, titel, info, preis }) {
  return (
    <div className={styles.card}>
      <img width={120} height={120} src={imageUrl} alt="Essen" />
      <p className={styles.titel}>{titel}</p>
      <div>
        <div>
          <p className={styles.info}>{info}</p>
          <b>{preis}</b>
        </div>
      </div>
    </div>
  );
}

export default Card;
