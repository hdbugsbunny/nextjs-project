import { logOut } from "@/actions/auth-actions";
import "../global.css";

export default function AuthRootLayout({ children }) {
  return (
    <>
      <header id="auth-header">
        <p>Welcome Back!</p>
        <form action={logOut}>
          <button>Logout</button>
        </form>
      </header>
      {children}
    </>
  );
}
