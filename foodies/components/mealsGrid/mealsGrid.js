import MealItem from "./mealItem";
import classes from "./mealsGrid.module.css";

export default function MealsGrid(props) {
  const { meals } = props;
  return (
    <ul className={classes.meals}>
      {meals &&
        meals.length > 0 &&
        meals.map((meal) => (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        ))}
    </ul>
  );
}
