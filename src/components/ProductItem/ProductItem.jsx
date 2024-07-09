import { useDispatch } from 'react-redux';
import sprite from '../../../public/svg/sprite.svg';
import { addToCart } from '../../redux/cart/cartSlice.js';
import styles from './ProductItem.module.css';

export default function ProductItem({ item }) {
  const { id, title, price, thumbnail } = item;

  const dispatch = useDispatch();

  const handleAdd = () => {
    console.log(item);
    dispatch(addToCart(item));
  };
  return (
    <li id={id} className={styles.item}>
      <svg width="16" height="16" className={styles.iconLike}>
        <use xlinkHref={`${sprite}#icon-like`}></use>
      </svg>
      <img src={thumbnail} className={styles.image} width="150" height="300" />

      <div className={styles.descriptionWrap}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.price}>{item.price.old}₴</p>
        </div>
        <button onClick={handleAdd} className={styles.addBtn}>
          <svg width="20" height="20" className={styles.iconAdd}>
            <use xlinkHref={`${sprite}#icon-like`}></use>
          </svg>
        </button>
      </div>
    </li>
  );
}
