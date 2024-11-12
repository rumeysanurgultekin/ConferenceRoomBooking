import { configureStore } from "@reduxjs/toolkit";
import venueReducer from "./slice/VenueSlice";
import addonsReducer from "./slice/AddonsSlice";
import mealReducer from "./slice/MealSlice";

export default configureStore({
  reducer: {
    venue: venueReducer,
    addons: addonsReducer,
    // meal: mealReducer,
  },
});
