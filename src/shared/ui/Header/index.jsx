import styles from "./header.module.css";
import ProfileIcon from "../icons/ProfileIcon";
import BookmarkIcon from "../icons/BookmarkIcon";

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <h1 className={styles.headerLogo}>logo</h1>
      <div className={styles.icons}>
        <BookmarkIcon className={styles.prof_icon} />
        <ProfileIcon className={styles.prof_icon} />
      </div>
    </div>
  );
}

export default Header;
