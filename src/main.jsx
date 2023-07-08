import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Details } from "./Page/Details/Details.jsx";
import { RestaurantContextProvider } from "./context/restaurantContext.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/restaurant-details/:id", element: <Details /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RestaurantContextProvider>
      <RouterProvider router={router} />
    </RestaurantContextProvider>
  </React.StrictMode>
);
