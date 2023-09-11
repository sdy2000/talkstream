import { Outlet } from "react-router-dom";

import { Navbar } from "@/parts/home-layout";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default HomeLayout;
