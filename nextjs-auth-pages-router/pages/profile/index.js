import UserProfile from "@/components/profile/userProfile";
import { getSession } from "next-auth/react";

export default function ProfilePage() {
  return <UserProfile />;
}

export async function getServerSideProps({ req, ...context }) {
  const session = await getSession({ req });
  if (!session) {
    return { redirect: { destination: "/auth", permanent: false } };
  }

  return { props: { session } };
}
