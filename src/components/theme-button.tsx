import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { chengTheme } from "@/context/slices";

function ThemeButton() {
  const dispatch = useDispatch();
  //   const { theme } = useSelector((store) => store.theme);

  return (
    <button
      className="flex justify-center items-center"
      onClick={() => dispatch(chengTheme())}
      title="Theme Button"
    >
      {/* {theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />} */}
    </button>
  );
}
export default ThemeButton;
