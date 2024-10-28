import AuthForm from "@/components/auth/authForm";
import { getSession } from "next-auth/client";

export default function AuthPage() {
  return <AuthForm />;
}

export async function getServerSideProps({ req, ...context }) {
  const session = await getSession({ req });
  if (session) {
    return { redirect: { destination: "/", permanent: false } };
  }

  return { props: {} };
}
