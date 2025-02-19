import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <h1 className={styles.headerLogo}>logo</h1>
      <div className={styles.icons}>
        <img src="/bookmark-fill.svg" alt="bookmarkError" />
        <img src="/person-circle.svg" alt="erson-circleError" />
      </div>
    </div>
  );
}

export default Header;
