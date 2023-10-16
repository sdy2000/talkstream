import { BiSolidUser } from "react-icons/bi";

import { useAppDispatch, useAppSelector } from "@/context/hooks";
import { DropdownMenu } from "./components";
import { ThemeButton } from "@/components";
import { closeModal, openModal } from "@/context/slices";
import { Link } from "react-router-dom";

const navbar = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((store) => store.auth.userInfo);
  const { isOpen, modalId } = useAppSelector((store) => store.modal);

  return (
    <nav className="bg-p border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-p">
            Flowbite
          </span>
        </a>
        <div className="flex items-center gap-6 md:gap-4 md:order-2">
          <ThemeButton />
          {userInfo?.photoURL ? (
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
              onClick={() =>
                modalId === "user_info"
                  ? dispatch(closeModal())
                  : dispatch(openModal("user_info"))
              }
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={userInfo?.photoURL}
                alt="user photo"
              />
            </button>
          ) : (
            <span className="text-2xl text-p">
              <BiSolidUser />
            </span>
          )}
          {/* <!-- Dropdown menu --> */}
          {modalId === "user_info" && isOpen && <DropdownMenu />}
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-t focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-t rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-p dark:bg-gray-800 md dark:border-gray-700">
            <li>
              <Link
                to={"/dashboard"}
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="block py-2 pl-3 pr-4 text-s rounded hover:bg-t md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-p md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="block py-2 pl-3 pr-4 text-s rounded hover:bg-t md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-p md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="block py-2 pl-3 pr-4 text-s rounded hover:bg-t md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-p md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="block py-2 pl-3 pr-4 text-s rounded hover:bg-t md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-p md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default navbar;
