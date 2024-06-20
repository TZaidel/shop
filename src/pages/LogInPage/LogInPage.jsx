import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './LoginPage.module.css';
import baseStyle from '../Base.module.css';

export default function LogInPage() {
  return (
    <>
      <div className={`${baseStyle.container}`}>
        <Header />
        <div className={styles.boxForWrappers}>
          <div className={styles.wraperFormAuth}>
            <h2 className={styles.titleLogin}>ВХІД</h2>
            <form>
              <div className={styles.boxInputs}>
                <input
                  className={styles.inputStyles}
                  type="email"
                  placeholder="електронна пошта *"
                />
                <input
                  className={styles.inputStyles}
                  type="password"
                  placeholder="пароль *"
                />
              </div>
              <div className={styles.boxCheckboxAndLink}>
                <label htmlFor="agree" className={styles.boxLabel}>
                  <input type="checkbox" id="agree" name="agree" />
                  <p className={styles.textRememberData}>
                    Запам&apos;ятати введені дані
                  </p>
                </label>
                <Link to="/restoration" className={styles.restorationLink}>
                  Забули пароль?
                </Link>
              </div>
            </form>
            <button className={styles.buttonLogin}>
              увійти до особистого кабінету
            </button>
          </div>
          <div className={styles.rectigleStyles}></div>
          <div className={styles.boxNavToRegister}>
            <h2 className={styles.titleLogin}>ЗАРЕЄСТРУЙТЕСЯ ЗАРАЗ</h2>
            <p className={styles.registerText}>
              Зареєструйтеся для оформлення замовлення
            </p>
            <Link to="/register" className={styles.navLinkRegister}>
              ЗАРЕЄСТРУВАТИСЬ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
