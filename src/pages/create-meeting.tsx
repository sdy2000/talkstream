import { AiOutlineArrowLeft } from "react-icons/ai";
import meeting1 from "@/assets/files/meeting1.png";
import meeting2 from "@/assets/files/meeting2.png";

import { MeetingCard } from "@/components";
import { Link } from "react-router-dom";

const meetingCardData = [
  {
    title: "Create 1 on 1 Meeting",
    slug: "/one-on-one",
    text: "Create a personal single person meeting.",
    image: meeting1,
  },
  {
    title: "Create Video Conference",
    slug: "/my-meeting",
    text: "Invite multiple persons to the meeting.",
    image: meeting2,
  },
];
const CreateMeeting = () => {
  return (
    <div className="flex flex-col container py-12">
      <Link
        to="/dashboard"
        className="text-3xl w-fit h-fit rounded-full bg-p text-t p-3 mx-20"
      >
        <AiOutlineArrowLeft />
      </Link>
      <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-6 py-20 px-6 sm:px-20">
        {meetingCardData.map((meet, idx) => (
          <MeetingCard {...meet} key={idx} />
        ))}
      </div>
    </div>
  );
};
export default CreateMeeting;
