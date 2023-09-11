import { Login, Dashboard } from "@/pages";

import { Routes, Route } from "react-router-dom";
import { HomeLayout } from "./layouts";

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="*" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
