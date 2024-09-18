export default function MealDetailsPage(props) {
  const { params } = props;
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Meal Details Page</h1>
      <p style={{ textAlign: "center" }}>Meal ID: {params.mealId}</p>
    </main>
  );
}
