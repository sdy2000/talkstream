import { MeetingDate, MeetingInput, MeetingSelect } from "@/components";
import { useFetchUsers, useForm } from "@/hooks";
import { Link } from "react-router-dom";

const getMeetingModel = () => ({
  meeting_name: "",
  select_user: "",
  start_data: "",
});

const OneOnOneMeeting = () => {
  const [users] = useFetchUsers();
  const {
    values,
    errors,
    // setErrors,
    handleInputChange,
  } = useForm(getMeetingModel);

  console.log(values, errors);

  return (
    <form className="flex flex-col gap-3 justify-center items-center py-20">
      <MeetingInput
        type="text"
        name="meeting_name"
        id="meeting_name"
        title="Meeting Name"
        placeholder={"Meeting Name..."}
        onChange={handleInputChange}
        value={values.meeting_name}
        errors={errors.meeting_name}
      />
      <MeetingSelect
        name="select_user"
        id="select_user"
        title="Invite User"
        placeholder="Invite User"
        onChange={handleInputChange}
        value={values.select_user}
        errors={errors.select_user}
        firstOption="Select a User"
      >
        {users.length === 0 ? (
          <option className="text-s py-1" value={1} disabled>
            There aren't any options available
          </option>
        ) : (
          users.map((user, idx) => (
            <option value={user.uid} key={idx}>
              {user.name}
            </option>
          ))
        )}
      </MeetingSelect>
      <MeetingDate
        name="start_data"
        id="start_data"
        title="Set Meeting Date"
        placeholder={"Set Meeting Date..."}
        onChange={handleInputChange}
        value={values.start_data}
        errors={errors.start_data}
      />
      <div className="flex justify-between items-center w-full max-w-sm">
        <button
          className="text-white px-12 py-2 rounded-xl shadow-lg hover:scale-105 duration-300 bg-blue-600 hover:bg-blue-800"
          type="submit"
        >
          Submit
        </button>
        <Link
          className="text-white px-12 py-2 rounded-xl shadow-lg hover:scale-105 duration-300 bg-red-600 hover:bg-red-800"
          to="/create-meeting"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default OneOnOneMeeting;
