import "./reset.css";
import "./index.css";
import Blogs from "./pages/Home/index";
import Login from "./pages/Login/index";
import { Routes, Route } from "react-router";
import Layout from "./shared/ui/Layout";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <div className="mx-auto max-w-[522px] border-[2px] border-black rounded-[10px] p-[10px]">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Blogs />} />
          <Route path="/blog/:blogId" element={<Blog/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
