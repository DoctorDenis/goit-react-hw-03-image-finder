import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import styles from '../index.module.css';

export function ImageGallery({ images, onClick }) {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
      ))}
    </ul>
  );
}
