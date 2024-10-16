import fs from "fs/promises";
import path from "path";

export default function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  console.log("Re-Generating...");

  const filePath = path.join(process.cwd(), "data", "dummyBackend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  if (!data) {
    return { redirect: { destination: "/noData" } };
  }
  if (data.products.length === 0) {
    return { notFound: true };
  }

  return { props: { products: data.products }, revalidate: 10 };
}
