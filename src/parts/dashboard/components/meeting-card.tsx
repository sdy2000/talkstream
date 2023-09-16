import { Link } from "react-router-dom";

type Props = {
  title: string;
  slug: string;
  text: string;
  image: string;
};
const MeetingCard = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 px-5 py-6 shadow-xl w-full md:w-96 bg-p rounded-lg hover:scale-110 duration-300">
      <img src={props.image} alt={props.title} />
      <Link
        to={props.slug}
        className="text-2xl font-extrabold text-p hover:underline"
      >
        {props.title}
      </Link>
      <span className="text-s text-sm whitespace-nowrap">{props.text}</span>
    </div>
  );
};
export default MeetingCard;
