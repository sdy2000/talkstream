import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { HomeLayout } from "@/layouts";
import { useAppSelector } from "./context/hooks";
import { changeTheme } from "@/hooks";
import {
  Login,
  Dashboard,
  //  OneOnOneMeeting
} from "@/pages";

function App() {
  //#region Theme Changer

  const { theme } = useAppSelector((store) => store.theme);

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  //#endregion

  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="*" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/one-on-one" element={<OneOnOneMeeting />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
// import { MeetingInput } from "@/components";
// import { useForm } from "@/hooks";

// const getMeetingModel = () => ({
//   meetingName: "",
// });

// const OneOnOneMeeting = () => {
//   const {
//     values,
//     errors,
//     // setErrors,
//     handleInputChange,
//   } = useForm(getMeetingModel);

//   return (
//     <div className="flex flex-col gap-6 justify-center items-center py-20">
//       <MeetingInput
//         type="text"
//         name="meetingName"
//         id="meetingName"
//         title="Meeting Name"
//         placeholder={"Meeting Name..."}
//         onChange={handleInputChange}
//         value={values.meetingName}
//         errors={errors.meetingName}
//       />
//     </div>
//   );
// };

// export default OneOnOneMeeting;
