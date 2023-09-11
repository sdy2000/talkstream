import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { addDoc, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";

import Animation from "@/assets/files/animation.gif";
import { firebaseAuth, useRef } from "@/services";
import { useAppDispatch } from "@/context/hooks";
import { setUser } from "@/context/slices";

const login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { uid, displayName, email, photoURL },
    } = await signInWithPopup(firebaseAuth, provider);

    if (email) {
      const firestoryQuery = query(useRef, where("uid", "==", uid));
      const fetchedUsers = await getDocs(firestoryQuery);
      if (fetchedUsers.docs.length === 0) {
        await addDoc(useRef, {
          uid,
          name: displayName,
          email,
          photoURL,
        });
      }
    }
    dispatch(setUser({ uid, name: displayName, email, photoURL }));
    navigate("/");
  };
  return (
    <div className="container flex justify-center items-center py-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 px-8 py-10 lg:py-0 bg-p rounded-lg shadow-lg dark:shadow-black">
        <div className="">
          <img src={Animation} alt="Animation" />
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-4xl font-extrabold">Logo</h1>
          <h3 className="text-2xl font-extrabold font-sans">
            One Platform to <span className="text-blue-600">connect</span>
          </h3>
          <button
            onClick={login}
            className="flex justify-center items-center gap-4 w-full py-2 bg-blue-600 text-white rounded-lg shadow-lg dark:shadow-black hover:underline"
          >
            <FcGoogle size={25} />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};
export default login;
