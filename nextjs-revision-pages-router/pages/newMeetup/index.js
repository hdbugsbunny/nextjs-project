import NewMeetupForm from "@/components/meetups/newMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";

export default function NewMeetupPage() {
  const router = useRouter();

  const onAddMeetup = async (enteredData) => {
    // Send the entered data to the server using an API call
    const response = await fetch("/api/newMeetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enteredData),
    });

    const data = await response.json();
    if (!response.ok) {
      console.log("🚀 ~ onAddMeetup ~ data.message:", data.message);
      return;
    }

    console.log("🚀 ~ onAddMeetup ~ data:", data);

    // Redirect to the all meetups page
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Create a New Meetup</title>
        <meta name="description" content="Create a new meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </>
  );
}
