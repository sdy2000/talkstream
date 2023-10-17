import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { addDoc } from "firebase/firestore";

import { MeetingDate, MeetingInput, MeetingSelect } from "@/components";
import { useFetchUsers, useForm, useToast } from "@/hooks";
import { meetingsRef } from "@/services";
import { generateMeetingID } from "@/utils";
import { useAppSelector } from "@/context/hooks";

const getMeetingModel = () => ({
  meeting_name: "",
  select_user: "",
  start_data: "",
});

const OneOnOneMeeting = () => {
  const uid = useAppSelector((store) => store.auth.userInfo?.uid);
  const [users] = useFetchUsers();
  const [createToast] = useToast();
  const navigate = useNavigate();
  const { values, errors, setErrors, handleInputChange } =
    useForm(getMeetingModel);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    if (validate(data)) {
      const meetingId = generateMeetingID();
      await addDoc(meetingsRef, {
        createdBy: uid,
        meetingId,
        meetingName: data.meeting_name,
        meetingType: "1-on-1",
        invitedUsers: data.select_user,
        meetingDate: data.start_data,
        maxUsers: 1,
        status: true,
      });
      createToast({
        title: "One on One Meeting Created Successfully",
        type: "green",
      });
      navigate("/");
    }
  };

  const validate = (data: { [k: string]: FormDataEntryValue }) => {
    let temp: {
      meeting_name: string;
      select_user: string;
      start_data: string;
    } = { meeting_name: "", select_user: "", start_data: "" };

    temp.meeting_name =
      data.meeting_name.length !== 0 ? "" : "Please Enter Meeting Name!";
    temp.select_user =
      data.select_user !== "Select a User" ? "" : "Please Enter Meeting User!";

    setErrors(temp);

    return Object.values(temp).every((x) => x === "");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 justify-center items-center py-20"
    >
      <MeetingInput
        type="text"
        name="meeting_name"
        id="meeting_name"
        title="Meeting Name"
        placeholder={"Meeting Name..."}
        isRequired={false}
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
