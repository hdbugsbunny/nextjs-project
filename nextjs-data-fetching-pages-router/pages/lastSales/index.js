import { useEffect, useState } from "react";

export default function LastSalesPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://nextjs-temp-course-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((responseData) => {
        const salesArray = [];
        for (const key in responseData) {
          salesArray.push({ id: key, ...responseData[key] });
        }
        setSales(salesArray);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
    return <p>No Sales Found!</p>;
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
