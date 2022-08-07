import React from 'react';
import styles from '../index.module.css';

export class Modal extends React.Component {
  closeModal = event =>
    event.code === 'Escape' && this.props.modalCloseMethod();

  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  render() {
    const {
      imageInfo: { url, tags },
      modalCloseMethod,
    } = this.props;
    return (
      <div
        className={styles.Overlay + ' overlay'}
        onClick={event =>
          event.target.classList.contains('overlay') && modalCloseMethod()
        }
      >
        <div className={styles.Modal}>
          <span onClick={() => modalCloseMethod()} className={styles.close_btn}>
            +
          </span>
          <img src={url} alt={tags} />
        </div>
      </div>
    );
  }
}
