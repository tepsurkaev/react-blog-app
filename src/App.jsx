import "./reset.css";
import "./index.css";
import styles from "./app.module.css";
// import Header from "./shared/ui/Header/index";
// import Blogs from "./pages/Home/component/Blogs/index";
import Login from "./pages/Login/components/index";

const App = () => {
  return (
    <div className={styles.container}>
      <Login />
      {/* <Header />
      <Blogs /> */}
    </div>
  );
};

export default App;
