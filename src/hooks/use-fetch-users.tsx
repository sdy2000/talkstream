import { useState, useEffect } from "react";
import { getDocs, query, where } from "firebase/firestore";

import { useAppSelector } from "@/context/hooks";
import { useRef } from "@/services";
import { UserType } from "@/DTOs";

const useFetchUsers = () => {
  const [users, setUsers] = useState<Array<UserType>>([]);
  const uid = useAppSelector((store) => store.auth.userInfo?.uid);

  useEffect(() => {
    if (uid) {
      const getUsers = async () => {
        const firestorequery = query(useRef, where("uid", "!=", uid));
        const data = await getDocs(firestorequery);
        const firebaseUsers: Array<UserType> = [];
        data.forEach((user) => {
          const userData = user.data() as UserType;
          firebaseUsers.push({
            ...userData,
            label: userData.name,
          });
        });
        setUsers(firebaseUsers);
      };
      getUsers();
    }
  }, [uid]);
  return [users];
};
export default useFetchUsers;
