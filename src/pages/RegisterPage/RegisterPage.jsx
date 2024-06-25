import Header from '../../components/Header/Header';
import styles from './RegisterPage.module.css';

export default function RegisterPage() {
  return (
    <>
      <Header />
      <div className={styles.wraperRegisterPage}>
        <h1 className={styles.titleregister}>РЕЄСТРАЦІЯ</h1>
        <div className={styles.boxForImageLeft}></div>
        <form className={styles.formStyles}>
          <div className={styles.wrapperForm}>
            <ul className={styles.listInputsLeft}>
              <li>
                <input
                  type="text"
                  className={styles.inputsStyle}
                  placeholder="ім’я *"
                />
              </li>
              <li>
                <input
                  type="text"
                  className={styles.inputsStyle}
                  placeholder="прізвище *"
                />
              </li>
              <li>
                <input
                  type="text"
                  className={styles.inputsStyle}
                  placeholder="по-батькові *"
                />
              </li>
            </ul>
            <ul className={styles.listInputsRight}>
              <li>
                <input
                  type="email"
                  className={styles.inputsStyle}
                  placeholder="електронна пошта *"
                />
              </li>
              <li>
                <input
                  type="number"
                  className={styles.inputsStyle}
                  placeholder="мобільний телефон *"
                />
              </li>
              <li>
                <input
                  type="password"
                  className={styles.inputsStyle}
                  placeholder="пароль *"
                />
              </li>
            </ul>
          </div>
          <div className={styles.boxLabelAndButton}>
            <label htmlFor="agree" className={styles.boxLabel}>
              <input
                type="checkbox"
                id="agree"
                name="agree"
                className={styles.checkBoxRegister}
              />
              <p className={styles.textagree}>
                Я погоджуюсь із Умовами надання послуг та Політикою
                конфіденційності
              </p>
            </label>
            <button className={styles.registerButton}>зареєструватися</button>
          </div>
        </form>
        <div className={styles.boxForImageRight}></div>
      </div>
    </>
  );
}
