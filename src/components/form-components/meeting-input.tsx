import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

type Props = {
  type: string;
  name: string;
  id: string;
  title: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  maxLength?: number;
  isRequired?: boolean;
  hasIcon?: boolean;
  errors?: string;
};

const MeetingInput = ({
  type = "text",
  name,
  id,
  title,
  placeholder,
  onChange,
  value,
  maxLength = 35,
  isRequired = true,
  hasIcon = false,
  errors,
}: Props) => {
  const [selectInput, setSelectInput] = useState<boolean>(false);
  const [focusInput, setFocusInput] = useState<boolean>(false);
  const [isShowPass, setIsShowPass] = useState<boolean>(false);
  const [mouseOn, setMouseOn] = useState<boolean>(false);

  return (
    <div
      className="flex flex-col justify-start gap-2 w-72 md:w-96 h-20"
      onMouseEnter={() => setMouseOn(true)}
      onMouseLeave={() => {
        !focusInput && setSelectInput(false);
        setMouseOn(false);
      }}
    >
      <label
        className={`font-bold ml-2 duration-300 ${
          selectInput ? " text-blue-600" : " text-p"
        }`}
      >
        {title}
      </label>
      <div className="flex flex-col w-full h-full">
        <span className="flex justify-between items-center gap-4 pr-3 bg-p rounded-lg shadow-lg border border-dbt">
          <input
            className={`text-p placeholder:text-t outline-none bg-p px-3 py-2 w-full`}
            onFocus={() => {
              setSelectInput(true), setFocusInput(true);
            }}
            onBlur={() => {
              setFocusInput(false), !mouseOn && setSelectInput(false);
            }}
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            type={isShowPass ? "text" : type}
            maxLength={maxLength}
            required={isRequired}
            value={value}
          />
          <span
            className={`text-p text-3xl ${hasIcon ? "visible" : "invisible"}`}
          >
            {!isShowPass ? (
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
            )}
          </span>
        </span>
        <span
          className={`self-start border-blue-600 duration-300 ${
            selectInput
              ? " visible border-[1px] w-full"
              : " invisible border-[1px] w-0"
          }`}
        ></span>
      </div>
      <p
        className={`text-red-600 -mt-2 ${
          errors !== "" ? "visible" : "invisible"
        }`}
      >
        {errors}
      </p>
    </div>
  );
};

export default MeetingInput;
