import styles from './BurgerMenuModal.module.css';
import PropTypes from 'prop-types';

const BurgerMenuModal = ({ isOpened, onClose }) => {
  if (!isOpened) return null;

  return (
    <div className={styles.specialBox}>
      <div className={styles.backDrop} onClick={onClose}>
        <div
          className={`${styles.wrapperModal} ${isOpened ? styles.active : ''}`}
        >
          <button className={styles.buttonClose} onClick={onClose}>
            Закрити
          </button>
        </div>
      </div>
    </div>
  );
};

BurgerMenuModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BurgerMenuModal;
