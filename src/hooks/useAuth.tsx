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
    const unsubsucribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
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

    return () => unsubsucribe();
  }, [navigate, dispatch]);

  // TODO: Check user for Valid information
  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (userInfo !== undefined) {
  //       const firestoryQuery = query(useRef, where("uid", "==", userInfo.uid));
  //       const fetchedUsers = await getDocs(firestoryQuery);

  //       console.log(fetchedUsers.docs.length);

  //       if (fetchedUsers.docs.length === 0) {
  //         dispatch(setUser(undefined));
  //         navigate("/login");
  //       }
  //     }
  //     if (userInfo === undefined) {
  //       dispatch(setUser(undefined));
  //       navigate("/login");
  //     }
  //   };
  //
  //   fetchData();
  // }, [userInfo]);
};
export default useAuth;
