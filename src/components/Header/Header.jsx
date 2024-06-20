
/*import clsx from 'clsx';*/
/*import { NavLink } from 'react-router-dom';*/
import styles from './Header.module.css';
import { IoSearchSharp } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { BsBasket3 } from "react-icons/bs";
export default function Header() {
/*  const linkClass = ({ isActive }) =>
  {
    return clsx(css.link, isActive && css.active);
  }; {
    return (
      <section>
        <nav className={css.nav}>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/cart" className={linkClass}>
            Cart
          </NavLink>
        </nav>
      </section>
    );
  }*/
  return (
    <section className={styles.headerContainer}>
      <h1 className={styles.logo}>UA TRADITIONS
      </h1>
      <ul className={styles.headerContainerLinks}>
        <li className={styles.headerContainerLinksItem}>ЖІНКАМ</li>
        <li className={styles.headerContainerLinksItem}>ЧОЛОВІКАМ</li>
        <li className={styles.headerContainerLinksItem}>ЗНИЖКИ</li>
        <li className={styles.headerContainerLinksItem}>ТВОЇ БАЛИ</li>
      </ul>
      <ul className={styles.headerContainerIcons}>
        <li className={styles.IconVector}><IoSearchSharp className={styles.IconsToNav}/></li>
        <li ><GoPerson className={styles.IconsToNav}/></li>
        <li ><BsBasket3 className={styles.IconsToNav}/></li>
      </ul>
    </section>
  )
}


