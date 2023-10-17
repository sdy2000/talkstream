import { useAppDispatch, useAppSelector } from "@/context/hooks";
import { setToasts } from "@/context/slices";

function useToast() {
  const toasts = useAppSelector((store) => store.meetings.toasts);
  const dispatch = useAppDispatch();
  const createToast = ({
    title,
    type,
  }: {
    title: string;
    type: "green" | "blue" | "yellow" | "red" | undefined;
  }) => {
    dispatch(
      setToasts(
        toasts.concat({
          id: new Date().toISOString(),
          title,
          color: type,
        })
      )
    );
  };
  return [createToast];
}

export default useToast;
