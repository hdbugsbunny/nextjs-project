import Link from "next/link";

export default function UserProfilePage(props) {
  const { user } = props;
  if (!user) return <p>Loading...</p>;

  return (
    <>
      <h1>User Profile</h1>
      <Link href={`/userProfile/${user.userId}`}>
        <p>Name: {user.name}</p>
      </Link>
      <p>Email: {user.email}</p>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: {
      user: { userId: "u1", name: "Harshit", email: "harshit@example.com" },
    },
  };
}
