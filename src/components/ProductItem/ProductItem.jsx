import styles from './ProductItem.module.css'
export default function ProductItem({ items }) {
console.log(items)
  const { id, title, price, thumbnail } = items;
  
  return (
    <li id={id} className={styles.item}>
      <img src={thumbnail} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      {/* <p className={styles.price.old}>{items.price.old}</p> */}
    </li>
  );
}