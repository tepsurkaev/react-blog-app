import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.loginWrapper}>
      <h1 className={styles.loginTitle}>Авторизация</h1>
      <form className={styles.loginForma}>
        <input type="text" placeholder="Введите имя" />
        <input type="password" placeholder="Введите пароль" />
        <button className={styles.btn}>Войти</button>
      </form>
    </div>
  );
};

export default Login;
