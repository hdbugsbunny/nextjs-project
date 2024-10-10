import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  const router = useRouter();
  console.log("🚀 ~ PortfolioProjectPage ~ router:", router);

  return (
    <div>
      <h1>Portfolio Project Page</h1>
      <p>This is the portfolio project page.</p>
    </div>
  );
}
