import { useEffect, useState } from "react";
import useSWR from "swr";

export default function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  //   const [isLoading, setIsLoading] = useState(false);
  const { data, error } = useSWR(
    "https://nextjs-temp-course-default-rtdb.firebaseio.com/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const salesArray = [];
      for (const key in data) {
        salesArray.push({ id: key, ...data[key] });
      }
      setSales(salesArray);
    }
  }, [data]);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch("https://nextjs-temp-course-default-rtdb.firebaseio.com/sales.json")
  //       .then((response) => response.json())
  //       .then((responseData) => {
  //         const salesArray = [];
  //         for (const key in responseData) {
  //           salesArray.push({ id: key, ...responseData[key] });
  //         }
  //         setSales(salesArray);
  //         setIsLoading(false);
  //       });
  //   }, []);

  if (error) {
    return <p>Failed To Load!</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Last Sales</h1>
      <ul>
        {sales.map((sale) => (
          <li key={sale.id}>
            {sale.userName} - ${sale.volume}
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://nextjs-temp-course-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();

  const sales = [];
  for (const key in data) {
    sales.push({ id: key, ...data[key] });
  }

  return { props: { sales } };
}
