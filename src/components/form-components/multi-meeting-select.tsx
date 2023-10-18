import { UserType } from "@/utils";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
  name?: string;
  id?: string;
  title: string;
  placeholder: string;
  firstOption: string;
  children?: React.ReactNode;
  selectUser: (e: string) => void;
  removeUser: (e: string) => void;
  selectedUser: any;
  value?: string | number;
  isRequired?: boolean;
  errors?: string;
};

const MultiMeetingSelect = ({
  name,
  id,
  title,
  placeholder,
  firstOption,
  children,
  selectUser,
  removeUser,
  selectedUser,
  value,
  isRequired = true,
  errors,
}: Props) => {
  const [selectInput, setSelectInput] = useState<boolean>(false);
  const [focusInput, setFocusInput] = useState<boolean>(false);
  const [mouseOn, setMouseOn] = useState<boolean>(false);

  return (
    <div
      className="flex flex-col justify-start gap-2 w-72 md:w-96"
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
          onFocus={() => {
            setSelectInput(true);
            setFocusInput(true);
          }}
          onBlur={() => {
            setFocusInput(false);
            !mouseOn && setSelectInput(false);
          }}
          onChange={(e) => selectUser(e.target.value)}
          name={name}
          id={id}
          placeholder={placeholder}
          required={isRequired}
          value={value}
        >
          <option hidden defaultValue={0}>
            {firstOption}
          </option>
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
      {selectedUser.length !== 0 && (
        <div className="flex justify-start items-center flex-wrap gap-2 bg-p rounded-lg shadow-lg text-s px-4 py-3">
          {selectedUser.map((user: UserType) => (
            <div
              className="flex justify-between items-center gap-3 bg-t rounded-full shadow-xl px-3 py-1"
              key={user.uid}
              onClick={() => removeUser(user.uid)}
            >
              <button className="text-2xl hover:text-t cursor-pointer duration-300">
                <AiOutlineClose />
              </button>
              <span>{user.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default MultiMeetingSelect;
