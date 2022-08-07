import styles from '../index.module.css';
// import minion from '../images/minion.gif';

export function Error({ message }) {
  return (
    <>
      <h2 className={styles.Error}>{message}</h2>
    </>
  );
}
