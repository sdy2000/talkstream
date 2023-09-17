import { useState } from "react";

type Props = {
  name?: string;
  id?: string;
  title: string;
  placeholder: string;
  firstOption: string;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string | number;
  isRequired?: boolean;
  errors?: string;
};

const MeetingSelect = ({
  name,
  id,
  title,
  placeholder,
  firstOption,
  children,
  onChange,
  value,
  isRequired = true,
  errors,
}: Props) => {
  const [selectInput, setSelectInput] = useState<boolean>(false);
  const [focusInput, setFocusInput] = useState<boolean>(false);
  const [mouseOn, setMouseOn] = useState<boolean>(false);

  const handleFocus = () => {
    setSelectInput(true);
    setFocusInput(true);
  };

  const handleBlur = () => {
    setFocusInput(false);
    !mouseOn && setSelectInput(false);
  };

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
        <select
          className="bg-p rounded-lg shadow-lg border border-dbt text-p placeholder:text-t outline-none bg-p px-3 py-2"
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          required={isRequired}
          value={value}
        >
          <option value={0}>{firstOption}</option>
          {children}
        </select>

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

export default MeetingSelect;
