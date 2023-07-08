import { Link } from "react-router-dom";
import { MenuList } from "../MenuList/MenuList";
import "./RestaurantList.css";
import { useRestaurantContext } from "../../context/restaurantContext";
export const RestaurantList = () => {
  const { filteredRestaurant } = useRestaurantContext();
  return (
    <div className="restaurant-list">
      {filteredRestaurant.map(({ id, name, menu }) => (
        <div key={id} className="restaurant">
          <Link to={`restaurant-details/${id}`}>Dishes By {name}</Link>
          <MenuList menu={menu} restaurantName={name} />
        </div>
      ))}
    </div>
  );
};
