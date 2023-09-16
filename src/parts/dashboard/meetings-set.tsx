import { MeetingCard } from "./components";
import dashboard1 from "@/assets/files/dashboard1.png";
import dashboard2 from "@/assets/files/dashboard2.png";
import dashboard3 from "@/assets/files/dashboard3.png";

const meetingCardData = [
  {
    title: "Create Meeting",
    slug: "/create-meeting",
    text: "Create a new meeting and invite people.",
    image: dashboard1,
  },
  {
    title: "My Meetings",
    slug: "/my-meeting",
    text: "View your created meetings.",
    image: dashboard2,
  },
  {
    title: "Meetings",
    slug: "/meetings",
    text: "View the meetings that you are invited to.",
    image: dashboard3,
  },
];

const MeetingsSet = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-6 py-40 px-6 sm:px-20">
      {meetingCardData.map((meet, idx) => (
        <MeetingCard {...meet} key={idx} />
      ))}
    </div>
  );
};
export default MeetingsSet;
