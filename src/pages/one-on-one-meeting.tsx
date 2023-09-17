import { MeetingInput } from "@/components";
import { useForm } from "@/hooks";

const getMeetingModel = () => ({
  meetingName: "",
  email: "",
  password: "",
});

const OneOnOneMeeting = () => {
  const { values, errors, setErrors, handleInputChange } =
    useForm(getMeetingModel);

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
      <MeetingInput
        type="email"
        name="email"
        id="email"
        title="Email"
        placeholder="Email..."
        onChange={handleInputChange}
        value={values.email}
        errors={errors.email}
      />
      <MeetingInput
        type="password"
        name="password"
        id="password"
        title="Password"
        hasIcon={true}
        placeholder={"Password..."}
        onChange={handleInputChange}
        value={values.password}
        errors={errors.password}
      />
    </div>
  );
};

export default OneOnOneMeeting;
