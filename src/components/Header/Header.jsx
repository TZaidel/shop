import clsx from 'clsx'
import { IoSearchSharp } from 'react-icons/io5';
import { GoPerson } from 'react-icons/go';
import { BsBasket3 } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';

import styles from './Header.module.css';

export default function Header() {
  const linkClass = ({ isActive }) => {
    return clsx(styles.navItem, isActive && styles.active);
  }
  return (
    <section className={styles.headerContainer}>
      <div className={styles.wrapperForNav}>
        <h1 className={styles.logo}>UA TRADITIONS</h1>
        <nav className={styles.navList}>
          <NavLink to="/catalog" className={linkClass}>
            ЖІНКАМ
          </NavLink>
          <NavLink to="/catalog" className={linkClass}>
            ЧОЛОВІКАМ
          </NavLink>
          <NavLink to="/" className={linkClass}>
            ЗНИЖКИ
          </NavLink>
          <NavLink to="/" className={linkClass}>
            ТВОЇ БАЛИ
          </NavLink>
        </nav>
      </div>
      <div>
        <ul className={styles.listIcons}>
          <li className={styles.itemIconSearch}>
            <Link to="/">
              <IoSearchSharp className={styles.IconsToNav} />
            </Link>
          </li>
          <li>
            <div className={styles.vector}></div>
          </li>
          <li className={styles.itemIconUser}>
            <Link to="/login">
              <GoPerson className={styles.IconsToNav} />
            </Link>
          </li>
          <li className={styles.itemIconBasket}>
            <Link to="/cart">
              <BsBasket3 className={styles.IconsToNav} />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
