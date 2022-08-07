import React from 'react';
import styles from '../index.module.css';

export function Button({ onClick }) {
  return (
    <button className={styles.Button} type="button" onClick={onClick}>
      Load more
    </button>
  );
}
