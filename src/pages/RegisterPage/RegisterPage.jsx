import Header from '../../components/Header/Header';
import styles from './RegisterPage.module.css';
import { useForm } from 'react-hook-form';
import { registerThunk } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

export default function RegisterPage() {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submit = data => {
    dispatch(registerThunk(data));
    reset();
  };
  return (
    <>
      <Header />
      <div className={styles.wraperRegisterPage}>
        <h1 className={styles.titleregister}>РЕЄСТРАЦІЯ</h1>
        <div className={styles.boxForImageLeft}></div>
        <form className={styles.formStyles} onSubmit={handleSubmit(submit)}>
          <div className={styles.wrapperForm}>
            <ul className={styles.listInputsLeft}>
              <li>
                <input
                  {...register('name')}
                  type="text"
                  required
                  className={styles.inputsStyle}
                  placeholder="ім’я *"
                />
              </li>
              <li>
                <input
                  {...register('surname')}
                  type="text"
                  required
                  className={styles.inputsStyle}
                  placeholder="прізвище *"
                />
              </li>
              <li>
                <input
                  {...register('fathername')}
                  type="text"
                  required
                  className={styles.inputsStyle}
                  placeholder="по-батькові *"
                />
              </li>
            </ul>
            <ul className={styles.listInputsRight}>
              <li>
                <input
                  {...register('email')}
                  type="email"
                  required
                  className={styles.inputsStyle}
                  placeholder="електронна пошта *"
                />
              </li>
              <li>
                <input
                  {...register('number')}
                  type="number"
                  required
                  className={styles.inputsStyle}
                  placeholder="мобільний телефон *"
                />
              </li>
              <li>
                <input
                  {...register('password')}
                  type="password"
                  required
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
                required
                className={styles.checkBoxRegister}
              />
              <p className={styles.textagree}>
                Я погоджуюсь із Умовами надання послуг та Політикою
                конфіденційності
              </p>
            </label>
            <button className={styles.registerButton} type="submit">
              зареєструватися
            </button>
          </div>
        </form>
        <div className={styles.boxForImageRight}></div>
      </div>
    </>
  );
}
