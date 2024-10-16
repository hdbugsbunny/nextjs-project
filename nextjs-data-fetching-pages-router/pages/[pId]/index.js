import getData from "@/util/fetchingData";

export default function ProductDetailPage(props) {
  const { product } = props;
  // if (!product) return <p>Loading...</p>;

  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const { pId } = context.params;
  const data = await getData();
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

export async function getStaticPaths() {
  const data = await getData();
  if (!data) {
    return { paths: [], fallback: "blocking" };
  }
  if (data.products.length === 0) {
    return { paths: [], fallback: "blocking" };
  }

  const paths = data.products.map((product) => ({
    params: { pId: product.id },
  }));

  return { paths, fallback: "blocking" };
}
