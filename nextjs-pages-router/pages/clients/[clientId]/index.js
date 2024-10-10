import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();
  console.log("🚀 ~ ClientProjectsPage ~ router:", router);

  return (
    <div>
      <h1>Client Projects Page</h1>
      <p>This is the client projects page.</p>
    </div>
  );
}
