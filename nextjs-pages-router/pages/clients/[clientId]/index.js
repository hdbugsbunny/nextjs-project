import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();
  console.log("🚀 ~ ClientProjectsPage ~ router:", router);

  const loadProjectHandler = () => {
    router.push({
      pathname: "/clients/[clientId]/[clientProjectId]",
      query: { clientId: "harsh", clientProjectId: "project-a" },
    });
  };

  return (
    <div>
      <h1>Client Projects Page</h1>
      <p>This is the client projects page.</p>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
