import styles from '../Hero/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={`${styles.title} ${styles.womanTitle}`}>ЖІНКАМ</p>
          <img
            className={styles.image}
            srcSet="/images/hero/forWomen.jpg"
            alt="Ukrainian woman in folk dress"
          />
        </li>
        <li className={styles.item}>
          <p className={`${styles.title} ${styles.menTitle}`}>ЧОЛОВІКАМ</p>
          <img
            className={styles.image}
            srcSet="/images/hero/forMan.jpg"
            alt="Ukrainian man in folk dress"
          />
        </li>
      </ul>
    </section>
  );
}
