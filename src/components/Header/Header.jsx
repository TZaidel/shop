import styles from './Header.module.css';
import { IoSearchSharp } from 'react-icons/io5';
import { GoPerson } from 'react-icons/go';
import { BsBasket3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <section className={styles.headerContainer}>
      <div className={styles.wrapperForNav}>
        <h1 className={styles.logo}>UA TRADITIONS</h1>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link>ЖІНКАМ</Link>
          </li>
          <li className={styles.navItem}>
            <Link>ЧОЛОВІКАМ</Link>
          </li>
          <li className={styles.navItem}>
            <Link>ЗНИЖКИ</Link>
          </li>
          <li className={styles.navItem}>
            <Link>ТВОЇ БАЛИ</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className={styles.listIcons}>
          <li className={styles.itemIconSearch}>
            <IoSearchSharp className={styles.IconsToNav} />
          </li>
          <li>
            <div className={styles.vector}></div>
          </li>
          <li className={styles.itemIconUser}>
            <GoPerson className={styles.IconsToNav} />
          </li>
          <li className={styles.itemIconBasket}>
            <BsBasket3 className={styles.IconsToNav} />
          </li>
        </ul>
      </div>
    </section>
  );
}
