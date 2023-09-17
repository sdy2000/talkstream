import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export const OneOnOneMeeting = (hasIcon: boolean) => {
  const [selectInput, setSelectInput] = useState<boolean>(false);
  const [isShowPass, setIsShowPass] = useState<boolean>(false);
  const [, setMoseOn] = useState<boolean>(false);

  return (
    <div className="flex justify-center items-center py-20">
      <div
        className="flex flex-col justify-start gap-2"
        onFocus={() => setSelectInput(true)}
        onBlur={() => setSelectInput(false)}
      >
        <label
          className={`font-bold ml-2 duration-300 ${
            selectInput ? " text-blue-600" : " text-p"
          }`}
        >
          Meeting Name
        </label>
        <div className="flex flex-col">
          <span className="flex justify-between items-center gap-4 pr-3 bg-p rounded-lg shadow-lg border border-dbt">
            <input
              type="text"
              className={`text-p placeholder:text-t outline-none bg-p px-3 py-2 `}
              placeholder="Meeting Name"
            />
            <span
              className="text-p text-3xl"
              onClick={() => setSelectInput(true)}
              onBlur={() => setSelectInput(false)}
            >
              {hasIcon &&
                (!isShowPass ? (
                  <BsEye
                    onClick={() => {
                      setIsShowPass(true);
                    }}
                  />
                ) : (
                  <BsEyeSlash
                    onClick={() => {
                      setIsShowPass(false);
                    }}
                  />
                ))}
            </span>
          </span>
          <span
            className={`self-start border-blue-600 duration-300 ${
              selectInput ? " border-[1px] w-full" : " w-0"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};
