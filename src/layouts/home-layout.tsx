import { Outlet } from "react-router-dom";

import { Navbar } from "@/parts/home-layout";
import { useAppSelector } from "@/context/hooks";
import { CloseModals, MeetingToast } from "@/components";

const HomeLayout = () => {
  const { isOpen, modalId } = useAppSelector((store) => store.modal);
  return (
    <div className="relative h-screen">
      {modalId !== "" && isOpen && <CloseModals />}
      <Navbar />
      <Outlet />
      <MeetingToast />
    </div>
  );
};
export default HomeLayout;
