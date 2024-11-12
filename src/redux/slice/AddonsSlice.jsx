import { createSlice } from "@reduxjs/toolkit";

const addonsItems = [
  {
    img: "https://pixabay.com/images/download/business-20031_640.jpg",
    name: "Projectors",
    cost: 200,
    quantity: 0,
  },
  {
    img: "https://pixabay.com/images/download/speakers-4109274_640.jpg",
    name: "Speaker",
    cost: 35,
    quantity: 0,
  },
  {
    img: "https://pixabay.com/images/download/public-speaking-3926344_640.jpg",
    name: "Microphones",
    cost: 45,
    quantity: 0,
  },
  {
    img: "https://pixabay.com/images/download/whiteboard-2903269_640.png",
    name: "Whiteboards",
    cost: 80,
    quantity: 0,
  },

  {
    img: "https://pixabay.com/images/download/signpost-235079_640.jpg",
    name: "Signage",
    cost: 80,
    quantity: 0,
  },
];

const initialState = {
  addonsItems,
  totaladdonscost: 0,
};

export const addonsSlice = createSlice({
  name: "addons",
  initialState: initialState,
  reducers: {
    incrementAddonsQuantity: (state, action) => {
      const item = state.addonsItems[action.payload];
      if (item) {
        item.quantity++;
        state.totaladdonscost += item.cost;
      }
    },
    decrementAddonsQuantity: (state, action) => {
      const item = state.addonsItems[action.payload];
      if (item && item.quantity > 0) {
        item.quantity--;
        state.totaladdonscost -= item.cost;
      }
    },
  },
});

export const { incrementAddonsQuantity, decrementAddonsQuantity } =
  addonsSlice.actions;

export default addonsSlice.reducer;
