import NewMeetupForm from "@/components/meetups/newMeetupForm";

export default function NewMeetupPage() {
  const onAddMeetup = (enteredData) => {
    console.log("🚀 ~ onAddMeetup ~ enteredData:", enteredData);
  };

  return <NewMeetupForm onAddMeetup={onAddMeetup} />;
}
