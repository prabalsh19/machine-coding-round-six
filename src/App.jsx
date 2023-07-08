import "./App.css";
import { RestaurantList } from "./components/RestaurantList/RestaurantList";
import { SelectCuisine } from "./components/SelectCuisine/SelectCuisine";

function App() {
  return (
    <div className="app">
      <h1>Food Ordering App</h1>
      <SelectCuisine />
      <RestaurantList />
    </div>
  );
}

export default App;
