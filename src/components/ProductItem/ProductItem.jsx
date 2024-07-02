import { FaRegHeart } from 'react-icons/fa';
import sprite from '../../../public/svg/sprite.svg'
import styles from './ProductItem.module.css';
export default function ProductItem({ item }) {
  console.log(item);
  const { id, title, price, thumbnail } = item;

  return (
    <li id={id} className={styles.item}>
      <svg width="27" height="27" className={styles.iconLike}>
        <use xlinkHref={`${sprite}#icon-like`}></use>
      </svg>
      {/*       
      <div className={styles.iconWrap}>
        <FaRegHeart className={styles.iconLike} />
      </div> */}
      <img src={thumbnail} className={styles.image} />

      <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>{item.price.old}₴</p>
    </li>
  );
}
