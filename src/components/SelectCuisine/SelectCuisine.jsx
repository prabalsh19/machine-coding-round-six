import { useRestaurantContext } from "../../context/restaurantContext";
import { cuisineData } from "../../db/db";
import "./SelectCuisine.css";

export const SelectCuisine = () => {
  const { setSelectedCuisine } = useRestaurantContext();
  return (
    <div className="select-cuisine">
      <h2>Select Your Cuisine</h2>
      <div className="cuisines">
        <button onClick={() => setSelectedCuisine(0)}>All</button>
        {cuisineData.map(({ name, id }) => (
          <button onClick={() => setSelectedCuisine(id)} key={id}>
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};
