// import { useAppSelector } from "@/context/hooks";
import { useAuth } from "@/hooks";

function dashboard() {
  // const userInfo = useAppSelector((store) => store.auth.userInfo);
  useAuth();
  return <div>dashboard</div>;
}
export default dashboard;
