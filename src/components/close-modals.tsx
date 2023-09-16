import { useAppDispatch } from "@/context/hooks";
import { closeModal } from "@/context/slices";

const CloseModals = () => {
  const dispatch = useAppDispatch();
  return (
    <div
      className="fixed inset-0 w-screen h-screen z-10"
      onClick={() => dispatch(closeModal())}
    ></div>
  );
};
export default CloseModals;
