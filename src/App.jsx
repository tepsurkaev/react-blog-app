import "./reset.css";
import "./index.css";
import styles from "./app.module.css";
import Header from "./shared/ui/Header/index";
import Blogs from "./shared/ui/Blogs/index";

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Blogs />
    </div>
  );
};

export default App;
