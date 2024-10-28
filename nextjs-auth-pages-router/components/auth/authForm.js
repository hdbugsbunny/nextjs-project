import { signIn } from "next-auth/react";
import { useRef, useState } from "react";
import classes from "./authForm.module.css";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const toggleAuth = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const body = { email, password };

    if (isLogin) {
      // Make API call to server to handle login
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false, // Don't redirect to home page after login
      });
      if (!response.ok) {
        console.log("Error>>>", response.error);
        return;
      }
      console.log("User logged in successfully!", response);
    } else {
      // Make API call to server to handle signup
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        console.log("Error>>>", data.message);
        return;
      }
      console.log("User created successfully!", data);
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailRef} name="email" type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            ref={passwordRef}
            name="password"
            type="password"
            id="password"
            required
          />
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
