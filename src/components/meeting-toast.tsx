import { AiOutlineClose } from "react-icons/ai";

import { useAppDispatch, useAppSelector } from "@/context/hooks";
import { setToasts } from "@/context/slices";

const MeetingToast = () => {
  const toasts = useAppSelector((store) => store.meetings.toasts);
  const dispatch = useAppDispatch();

  const removeToast = (removedToastId: string) => {
    dispatch(
      setToasts(
        toasts.filter((toast: { id: string }) => toast.id !== removedToastId)
      )
    );
  };

  return toasts.map((toast, idx) => {
    setTimeout(() => {
      removeToast(toast.id);
    }, 5000);

    return (
      <div
        key={idx}
        style={{
          right: `${idx * 20}px`,
          bottom: `${(idx + 1) * 20}px`,
          borderLeft: `${toast.color} 8px solid`,
          zIndex: idx + 50,
        }}
        className={`absolute flex flex-col rounded-xl shadow-lg overflow-hidden mx-2`}
      >
        <div
          style={{
            width: "0%",
            height: "5px",
            backgroundColor: toast.color,
            animation: "widthAnimation 5s",
          }}
        />

        <div className="flex justify-between items-center gap-8 px-8 py-6 bg-p text-s">
          <button
            onClick={() => removeToast(toast.id)}
            className="text-4xl cursor-pointer hover:text-t duration-200"
          >
            <AiOutlineClose />
          </button>
          <span>{toast.title}</span>
        </div>
      </div>
    );
  });
};
export default MeetingToast;
