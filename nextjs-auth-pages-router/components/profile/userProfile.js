import ProfileForm from "./profileForm";
import classes from "./userProfile.module.css";

export default function UserProfile() {
  // TODO: Redirect Away If NOT Authenticated

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}
