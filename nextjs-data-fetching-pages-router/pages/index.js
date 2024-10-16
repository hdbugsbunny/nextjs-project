import getData from "@/util/fetchingData";
import Link from "next/link";

export default function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  console.log("Re-Generating...");

  const data = await getData();
  if (!data) {
    return { redirect: { destination: "/noData" } };
  }
  if (data.products.length === 0) {
    return { notFound: true };
  }

  return { props: { products: data.products }, revalidate: 10 };
}
