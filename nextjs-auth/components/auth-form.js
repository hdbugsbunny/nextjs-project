import Link from "next/link";

export default function AuthForm() {
  return (
    <form id="auth-form">
      <div>
        <img src={"/images/auth-icon.jpg"} alt="A Lock Icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      <p>
        <button type="submit">Create Account</button>
      </p>
      <p>
        <Link href={"/"}>Login With Existing Account!</Link>
      </p>
    </form>
  );
}
