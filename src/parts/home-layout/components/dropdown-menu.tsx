import { useAppDispatch, useAppSelector } from "@/context/hooks";
import { closeModal, signOutUser } from "@/context/slices";
import { firebaseAuth } from "@/services";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((store) => store.auth.userInfo);

  const logout = () => {
    dispatch(signOutUser());
    dispatch(closeModal());
    signOut(firebaseAuth);
  };

  return (
    <div
      className="z-20 absolute top-14 right-4 my-4 text-base list-none bg-p divide-y divide-gray-100 rounded-lg shadow bg-p dark:divide-gray-600"
      id="user-dropdown"
    >
      <div className="px-4 py-3">
        <span className="block text-sm text-s text-p">{userInfo?.name}</span>
        <span className="block text-sm  text-t truncate w-32">
          {userInfo?.email}
        </span>
      </div>
      <ul className="py-2" aria-labelledby="user-menu-button">
        <li>
          <Link
            to={"/dashboard"}
            className="block px-4 py-2 text-sm text-s hover:bg-t text-p"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to={"#"}
            className="block px-4 py-2 text-sm text-s hover:bg-t text-p"
          >
            Settings
          </Link>
        </li>
        <li>
          <Link
            to={"#"}
            className="block px-4 py-2 text-sm text-s hover:bg-t text-p"
          >
            Earnings
          </Link>
        </li>
        <li>
          <button
            onClick={logout}
            className="block px-4 py-2 text-sm text-s hover:bg-t text-p"
          >
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
};
export default DropdownMenu;
