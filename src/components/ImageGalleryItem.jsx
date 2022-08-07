import React from 'react';
import styles from '../index.module.css';

export default function ImageGalleryItem({
  image: { webformatURL, largeImageURL, tags },
  onClick,
}) {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        onClick={onClick}
        data-url={largeImageURL}
        data-tags={tags}
        className={styles.ImageGalleryItem_image}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
}
