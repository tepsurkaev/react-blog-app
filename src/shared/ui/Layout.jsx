import Header from "./Header/index";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default Layout;
