import { useAppDispatch } from "@/context/hooks";
import { setUser } from "@/context/slices";
import { firebaseAuth } from "@/services";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //Check user for Log in
  useEffect(() => {
    const unSub = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) navigate("/login");
      else {
        dispatch(
          setUser({
            uid: currentUser.uid,
            name: currentUser.displayName,
            email: currentUser.email,
            photoURL: currentUser.photoURL,
          })
        );
      }
    });

    return () => unSub();
  }, [navigate, dispatch]);
};
export default useAuth;
