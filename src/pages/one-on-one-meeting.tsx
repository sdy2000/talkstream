import { MeetingInput } from "@/components";
import { useForm } from "@/hooks";

const getMeetingModel = () => ({
  meetingName: "",
});

const OneOnOneMeeting = () => {
  const {
    values,
    errors,
    // setErrors,
    handleInputChange,
  } = useForm(getMeetingModel);

  return (
    <div className="flex flex-col gap-6 justify-center items-center py-20">
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
    </div>
  );
};

export default OneOnOneMeeting;
