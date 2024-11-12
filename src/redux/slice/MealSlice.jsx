import { createSlice } from "@reduxjs/toolkit";

const mealItems = [
  { name: "Breakfast", cost: 50, selected: false },
  { name: "High Tea", cost: 25, selected: false },
  { name: "Lunch", cost: 65, selected: false },
  { name: "Dinner", cost: 70, selected: false },
];

const initialState = {
  mealItems,
  totalmealcost: 0,
};

export const mealSlice = createSlice({
  name: "meal",
  initialState: initialState,
  reducers: {
    toggleMealSelection: (state, action) => {
      const index = action.payload;
      // Check if index is valid
      if (index >= 0 && index < state.mealItems.length) {
        state.mealItems[index].selected = !state.mealItems[index].selected;
      } else {
        console.error(`Invalid meal item index: ${index}`);
      }
    },
  },
});

export const { toggleMealSelection } = mealSlice.actions;
export default mealSlice.reducer;
