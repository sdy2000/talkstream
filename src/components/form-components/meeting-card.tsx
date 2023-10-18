import { Link } from "react-router-dom";

type Props = {
  title: string;
  slug: string;
  text: string;
  image: string;
};
const MeetingCard = (props: Props) => {
  return (
    <Link
      to={props.slug}
      className="flex flex-col justify-center items-center gap-3 px-5 py-6 shadow-xl w-full md:w-96 bg-p rounded-lg hover:scale-105 duration-300 hover:cursor-pointer"
    >
      <img src={props.image} alt={props.title} />
      <div className="text-2xl font-extrabold text-p hover:underline">
        {props.title}
      </div>
      <span className="text-s text-sm whitespace-nowrap">{props.text}</span>
    </Link>
  );
};
export default MeetingCard;
