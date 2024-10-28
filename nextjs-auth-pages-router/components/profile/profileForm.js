import classes from "./profileForm.module.css";

export default function ProfileForm() {
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="newPassword">New Password</label>
        <input name="newPassword" type="password" id="newPassword" required />
      </div>
      <div className={classes.control}>
        <label htmlFor="oldPassword">Old Password</label>
        <input name="oldPassword" type="password" id="oldPassword" required />
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
}
