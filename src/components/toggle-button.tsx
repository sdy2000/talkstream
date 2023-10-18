type Props = {
  text: string;
  isChecked: boolean;
  onClick: any;
};

const ToggleButton = ({ text, isChecked, onClick }: Props) => {
  return (
    <label className="autoSaverSwitch relative inline-flex cursor-pointer select-none justify-around items-center px-1  w-72 md:w-96">
      <span className="label flex items-center text-sm text-p">
        {text} <span className="pl-1"> {isChecked ? "On" : "Off"} </span>
      </span>
      <input
        type="checkbox"
        name="autoSaver"
        className="sr-only"
        checked={isChecked}
        onChange={onClick}
      />
      <span
        className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
          isChecked ? "bg-blue-500" : "bg-[#CCCCCE]"
        }`}
      >
        <span
          className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
            isChecked ? "translate-x-6" : ""
          }`}
        ></span>
      </span>
    </label>
  );
};
export default ToggleButton;
