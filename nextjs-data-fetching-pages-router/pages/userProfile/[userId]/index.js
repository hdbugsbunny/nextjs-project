export default function UserIdPage(props) {
  const { userId } = props;

  return <h1>User ID: {userId}</h1>;
}

export async function getServerSideProps(context) {
  const { userId } = context.params;
  if (!userId) {
    return { redirect: { destination: "/noData" } };
  }

  return { props: { userId } };
}
