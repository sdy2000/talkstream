import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addDoc } from "firebase/firestore";

import {
  MeetingDate,
  MeetingInput,
  MultiMeetingSelect,
  ToggleButton,
} from "@/components";
import { useFetchUsers, useForm, useToast } from "@/hooks";
import { meetingsRef } from "@/services";
import { UserType, generateMeetingID } from "@/utils";
import { useAppSelector } from "@/context/hooks";

const getMeetingModel = () => ({
  meeting_name: "",
  start_data: "",
});

const VideoConference = () => {
  const uid = useAppSelector((store) => store.auth.userInfo?.uid);
  const [users] = useFetchUsers();
  const [createToast] = useToast();
  const navigate = useNavigate();
  const { values, errors, setErrors, handleInputChange } =
    useForm(getMeetingModel);

  const [selectedUser, setSelectedUser] = useState<Array<UserType>>([]);
  const [maxPeople, setMaxPeople] = useState<number>(1);
  const [anyoneCanJoin, setAnyoneCanJoin] = useState(false);

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
        meetingType: anyoneCanJoin ? "anyone-can-join" : "video-conference",
        invitedUsers: anyoneCanJoin
          ? []
          : selectedUser.map((user: UserType) => user.uid),
        meetingDate: data.start_data,
        maxUsers: anyoneCanJoin ? 100 : maxPeople,
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
      selected_users: string;
      start_data: string;
    } = { meeting_name: "", selected_users: "", start_data: "" };

    temp.meeting_name =
      data.meeting_name.length !== 0 ? "" : "Please Enter Meeting Name!";
    temp.selected_users =
      data.selected_users !== "Select a User"
        ? ""
        : "Please Enter Meeting User!";

    setErrors(temp);

    return Object.values(temp).every((x) => x === "");
  };

  const selectUser = (uid: string) => {
    let addedUser = users.find(
      (user: UserType | undefined) => user?.uid === uid
    );

    if (
      addedUser &&
      !selectedUser.find((user: UserType) => user.uid === addedUser?.uid)
    ) {
      setSelectedUser([...selectedUser, addedUser]);
    }
  };

  const removeUser = (uid: string) => {
    setSelectedUser([
      ...selectedUser.filter((user: UserType) => user.uid !== uid),
    ]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 justify-center items-center py-20 "
    >
      <ToggleButton
        isChecked={anyoneCanJoin}
        onClick={() => setAnyoneCanJoin(!anyoneCanJoin)}
        text="Anyone can Join"
      />
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
      {anyoneCanJoin ? (
        <MeetingInput
          type="number"
          name="size"
          id="size"
          title="Maximum People"
          placeholder={"Maximum People..."}
          isRequired={true}
          onChange={(e) => {
            setMaxPeople(
              parseInt(e.target.value) > 50
                ? 50
                : parseInt(e.target.value) <= 0 ||
                  parseInt(e.target.value) === null
                ? 1
                : parseInt(e.target.value)
            );
          }}
          value={maxPeople}
          errors={errors.size}
        />
      ) : (
        <MultiMeetingSelect
          name="selected_users"
          id="selected_users"
          title="Invite User"
          placeholder="Invite User"
          selectUser={selectUser}
          removeUser={removeUser}
          selectedUser={selectedUser}
          value={values.selected_users}
          errors={errors.selected_users}
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
        </MultiMeetingSelect>
      )}
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
        <Link
          className="text-white px-12 py-2 rounded-xl shadow-lg hover:scale-105 duration-300 bg-red-600 hover:bg-red-800"
          to="/create-meeting"
        >
          Cancel
        </Link>
        <button
          className="text-white px-12 py-2 rounded-xl shadow-lg hover:scale-105 duration-300 bg-blue-600 hover:bg-blue-800"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default VideoConference;
