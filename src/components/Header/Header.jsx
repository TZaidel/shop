import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {
  const linkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  
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
}
