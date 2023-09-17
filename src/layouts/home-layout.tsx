import { Outlet } from "react-router-dom";

import { Navbar } from "@/parts/home-layout";
import { useAppSelector } from "@/context/hooks";
import { CloseModals } from "@/components";

const HomeLayout = () => {
  const { isOpen, modalId } = useAppSelector((store) => store.modal);
  return (
    <div>
      {modalId !== "" && isOpen && <CloseModals />}
      <Navbar />
      <Outlet />
    </div>
  );
};
export default HomeLayout;
