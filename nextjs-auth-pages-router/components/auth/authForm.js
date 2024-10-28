import { useState } from "react";
import classes from "./authForm.module.css";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleAuth = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input name="email" type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input name="password" type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
          <button type="button" className={classes.toggle} onClick={toggleAuth}>
            {isLogin ? "Create New Account" : "Login With Existing Account"}
          </button>
        </div>
      </form>
    </section>
  );
}
