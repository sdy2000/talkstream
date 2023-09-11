import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import { useAppDispatch, useAppSelector } from "@/context/hooks";
import { chengTheme } from "@/context/slices";

function ThemeButton() {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((store) => store.theme);

  return (
    <button
      className="flex justify-center items-center text-3xl text-p"
      onClick={() => dispatch(chengTheme())}
      title="Theme Button"
    >
      {theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
    </button>
  );
}
export default ThemeButton;
