// import { useAppSelector } from "@/context/hooks";
import { useAuth } from "@/hooks";
import { MeetingsSet } from "@/parts/dashboard";

function dashboard() {
  // const userInfo = useAppSelector((store) => store.auth.userInfo);
  useAuth();
  return <MeetingsSet />;
}
export default dashboard;
