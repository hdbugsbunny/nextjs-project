import { useRef } from "react";
import classes from "./profileForm.module.css";

export default function ProfileForm({ changePassword }) {
  const newPassRef = useRef();
  const oldPassRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPassword = newPassRef.current.value;
    const oldPassword = oldPassRef.current.value;

    await changePassword(newPassword, oldPassword);

    newPassRef.current.value = "";
    oldPassRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label htmlFor="newPassword">New Password</label>
        <input
          ref={newPassRef}
          name="newPassword"
          type="password"
          id="newPassword"
          required
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="oldPassword">Old Password</label>
        <input
          ref={oldPassRef}
          name="oldPassword"
          type="password"
          id="oldPassword"
          required
        />
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
}
