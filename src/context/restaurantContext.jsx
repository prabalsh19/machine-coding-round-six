/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { restaurantsData } from "../db/db";

const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurantsDb, setRestaurantsDb] = useState(restaurantsData);
  const [selectedCuisine, setSelectedCuisine] = useState(0);
  const filteredRestaurant = restaurantsData.filter((restaurant) =>
    selectedCuisine === 0 ? true : restaurant.cuisine_id === selectedCuisine
  );

  const value = {
    filteredRestaurant,
    restaurantsDb,
    setRestaurantsDb,
    selectedCuisine,
    setSelectedCuisine,
  };
  console.log(restaurantsDb);
  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
};
export const useRestaurantContext = () => useContext(RestaurantContext);
