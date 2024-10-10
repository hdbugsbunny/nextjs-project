import { useRouter } from "next/router";

export default function SelectedClientProjectPage() {
  const router = useRouter();
  console.log("🚀 ~ SelectedClientProjectPage ~ router:", router);

  return (
    <div>
      <h1>Selected Client Project Page</h1>
      <p>This is the selected client project page.</p>
    </div>
  );
}
