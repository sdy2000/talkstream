import { MeetingInput, MeetingSelect } from "@/components";
import { useForm } from "@/hooks";

const getMeetingModel = () => ({
  meetingName: "",
  text: "",
});

const OneOnOneMeeting = () => {
  // const [users] = useFetchUsers();
  const {
    values,
    errors,
    // setErrors,
    handleInputChange,
  } = useForm(getMeetingModel);

  console.log(values);

  return (
    <div className="flex flex-col gap-3 justify-center items-center py-20">
      <MeetingInput
        type="text"
        name="meetingName"
        id="meetingName"
        title="Meeting Name"
        placeholder={"Meeting Name..."}
        onChange={handleInputChange}
        value={values.meetingName}
        errors={errors.meetingName}
      />
      <MeetingSelect
        name="text"
        id="text"
        title="Name"
        placeholder={"Name..."}
        onChange={handleInputChange}
        value={values.text}
        errors={errors.text}
        firstOption="select"
      >
        <option value={100}>Select a </option>
        <option value={1000}>Select a userfgfg</option>
        <option value={1000}>Select a dsfvdsgfdsgd</option>
      </MeetingSelect>
    </div>
  );
};

export default OneOnOneMeeting;
