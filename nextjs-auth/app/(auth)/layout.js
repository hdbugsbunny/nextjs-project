import "../global.css";

export const metadata = {
  title: "Next.js Authentication",
  description: "Learn How to Implement Authentication Using Next.js",
};

export default function AuthRootLayout({ children }) {
  return (
    <>
      <header id="auth-header">
        <p>Welcome Back!</p>
        <form>
          <button>Logout</button>
        </form>
      </header>
      {children}
    </>
  );
}
