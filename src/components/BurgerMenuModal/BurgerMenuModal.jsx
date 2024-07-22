import styles from './BurgerMenuModal.module.css';
import PropTypes from 'prop-types';
import { BsBasket3 } from 'react-icons/bs';
import { GoPerson } from 'react-icons/go';
import { IoClose, IoSearchSharp } from 'react-icons/io5';

const BurgerMenuModal = ({ isOpened, onClose }) => {
  if (!isOpened) return null;

  const handleWrapperClick = event => {
    event.stopPropagation();
  };

  return (
    <div className={styles.specialBox}>
      <div className={styles.backDrop} onClick={onClose}>
        <div
          className={`${styles.wrapperModal} ${isOpened ? styles.active : ''}`}
          onClick={handleWrapperClick}
        >
          <button className={styles.buttonClose} onClick={onClose}>
            <IoClose className={styles.closeIcon} />
          </button>

          <ul className={styles.listBurgerMenu}>
            <li className={styles.itemBurgerMenu}>
              <p>ЖІНКАМ</p>
            </li>
            <li className={styles.itemBurgerMenu}>
              <p>ЧОЛОВІКАМ</p>
            </li>
            <li className={styles.itemBurgerMenu}>
              <p>ЗНИЖКИ</p>
            </li>
            <li className={styles.itemBurgerMenu}>
              <p>ПОШУК</p>
              <IoSearchSharp className={styles.IconsToNavSearch} />
            </li>
            <li className={styles.itemBurgerMenu}>
              <p>ПРОФІЛЬ</p>
              <GoPerson className={styles.IconsToNavPerson} />
            </li>
            <li className={styles.itemBurgerMenuBasket}>
              <p>КОШИК</p>
              <BsBasket3 className={styles.IconsToNavBasket} />
            </li>
          </ul>
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
