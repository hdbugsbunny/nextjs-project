import { useSession } from "next-auth/react";
import ProfileForm from "./profileForm";
import classes from "./userProfile.module.css";

export default function UserProfile() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  if (loading) {
    return <p className={classes.profile}>Loading...</p>;
  }

  if (!session) {
    window.location.href = "/auth";
    return <p className={classes.profile}>Please Login!!!</p>;
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}
