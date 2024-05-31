import styles from './Card.module.scss';

function Card(props) {
  return (
    <div className={styles.card}>
      <img width={120} height={120} src={props.imageUrl} alt="Essen" />
      <p style={{ fontWeight: 'bold' }}>{props.titel}</p>
      <div>
        <div>
          <p>{props.info}</p>
          <b>{props.preis}</b>
        </div>
        <button className={styles.button} onClick={props.onSelect}>
          Auswählen
        </button>
      </div>
    </div>
  );
}

export default Card;
