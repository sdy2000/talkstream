import { useState, useEffect } from "react";
import { getDocs, query, where } from "firebase/firestore";

import { useAppSelector } from "@/context/hooks";
import { useRef } from "@/services";
import { UesrType } from "@/DTOs";

const useFetchUsers = () => {
  const [users, setusers] = useState<Array<UesrType>>([]);
  const uid = useAppSelector((store) => store.auth.userInfo?.uid);

  useEffect(() => {
    if (uid) {
      const getUsers = async () => {
        const firestorequery = query(useRef, where("uid", "!=", uid));
        const data = await getDocs(firestorequery);
        const firebaseUsers: Array<UesrType> = [];
        data.forEach((user) => {
          const userData = user.data() as UesrType;
          firebaseUsers.push({
            ...userData,
            label: userData.name,
          });
        });
        setusers(firebaseUsers);
      };
      getUsers();
    }
  }, [uid]);
  return [users];
};
export default useFetchUsers;
