import "./reset.css";
import "./index.css";
import styles from "./app.module.css";
import Blogs from "./pages/Home/index";
import Login from "./pages/Login/index";
import { Routes, Route } from "react-router";
import Layout from "./shared/ui/Layout";

const App = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Blogs />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
