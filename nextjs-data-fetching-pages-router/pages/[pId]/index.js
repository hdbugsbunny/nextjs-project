import fs from "fs/promises";
import path from "path";

export default function ProductDetailPage(props) {
  const { product } = props;

  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const { pId } = context.params;
  const filePath = path.join(process.cwd(), "data", "dummyBackend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  if (!data) {
    return { redirect: { destination: "/noData" } };
  }
  if (data.products.length === 0) {
    return { notFound: true };
  }

  const productData = data.products.find((product) => product.id === pId);
  if (!productData) {
    return { redirect: { destination: "/noData" } };
  }

  return { props: { product: productData } };
}
