export default function UserProfilePage(props) {
  const { user } = props;
  if (!user) return <p>Loading...</p>;

  return (
    <>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </>
  );
}

export async function getServerSideProps(context) {
  return { props: { user: { name: "Harshit", email: "harshit@example.com" } } };
}
