import { MeetingInput, MeetingSelect } from "@/components";
import { useFetchUsers, useForm } from "@/hooks";

const getMeetingModel = () => ({
  meeting_name: "",
  select_user: "",
});

const OneOnOneMeeting = () => {
  const [users] = useFetchUsers();
  const {
    values,
    errors,
    // setErrors,
    handleInputChange,
  } = useForm(getMeetingModel);

  return (
    <div className="flex flex-col gap-3 justify-center items-center py-20">
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
            There aren't any options available{" "}
          </option>
        ) : (
          users.map((user, idx) => (
            <option value={user.uid} key={idx}>
              {user.name}
            </option>
          ))
        )}
      </MeetingSelect>
    </div>
  );
};

export default OneOnOneMeeting;
