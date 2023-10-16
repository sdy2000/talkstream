import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { HomeLayout } from "@/layouts";
import { useAppSelector } from "./context/hooks";
import { changeTheme } from "@/hooks";
import { Login, Dashboard, OneOnOneMeeting, CreateMeeting } from "@/pages";

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

        {/* Create Meeting */}
        <Route path="/create-meeting" element={<CreateMeeting />} />
        <Route path="/one-on-one" element={<OneOnOneMeeting />} />
      </Route>
    </Routes>
  );
}

export default App;
