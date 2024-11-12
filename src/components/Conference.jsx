import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
} from "../redux/slice/VenueSlice";
import {
  incrementAddonsQuantity,
  decrementAddonsQuantity,
} from "../redux/slice/AddonsSlice";
import { toggleMealSelection } from "../redux/slice/MealSlice";
import Basket from "./Basket";

const Conference = () => {
  const dispatch = useDispatch();
  const { venueItems, totalcost } = useSelector((state) => state.venue);
  const { addonsItems, totaladdonscost } = useSelector((state) => state.addons);
  //   const { mealItems } = useSelector((state) => state.meal);

  const allcost = totalcost + totaladdonscost;

  const handleIncrementQuantity = (index) => {
    dispatch(incrementQuantity(index));
    console.log(index, "artırıldı");
  };

  const handleDecrementQuantity = (index) => {
    dispatch(decrementQuantity(index));
  };

  const handleIncrementAddonsQuantity = (index) => {
    dispatch(incrementAddonsQuantity(index));
  };

  const handleDecrementAddonsQuantity = (index) => {
    dispatch(decrementAddonsQuantity(index));
  };

  //   const [numberOfPeople, setNumberOfPeople] = useState(1);
  //   const handleMealSelection = (index) => {
  //     const item = mealItems[index];
  //     if (item) {
  //       // Proceed if item is defined
  //       dispatch(toggleMealSelection(index));
  //     } else {
  //       console.error(`Meal item at index ${index} is undefined`);
  //     }
  //   };

  return (
    <>
      <navbar className="d-flex flex-row justify-content-between px-4 align-items-center py-3 bg-black text-white">
        <div className="logo">
          <h2>Conference Planner</h2>
        </div>
        <div className="right-side-navbar d-flex flex-row align-items-center">
          <div className="nav-link">
            <a href="#venue" className="mx-3 text-white">
              Venue
            </a>
            <a href="#addons" className="mx-3 text-white">
              Add-ons
            </a>
            {/* <a href="#meals" className="mx-3 text-white">
              Meals
            </a> */}
          </div>
          <div className="details-button">
            <button className="btn btn-outline-dark mx-5 text-white">
              Basket
            </button>
          </div>
        </div>
      </navbar>
      <section id="venue" className="border-bottom border-dark ">
        <h2 className="text-center my-5">Conference Venues</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {venueItems &&
            venueItems.map((item, index) => {
              return (
                <div key={index} className="m-5 ">
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ height: "150px" }}
                  />
                  <div className="text-center mt-3">
                    <p>{item.name}</p>
                    <p>Cost: ${item.cost}</p>

                    <button
                      className="basketbutton "
                      onClick={() => handleDecrementQuantity(index)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="basketbutton"
                      onClick={() => handleIncrementQuantity(index)}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="text-center my-5 fs-3 fs-bold py-3">
          <p className="fs-5 fw-bold"> Venue Cost: ${totalcost}</p>
        </div>
      </section>
      <section id="addons" className="border-bottom border-dark">
        <h2 className="text-center my-5">Conference Addons</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {addonsItems &&
            addonsItems.map((item, index) => {
              return (
                <div key={index} className="m-5 ">
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ height: "150px" }}
                  />
                  <div className="text-center mt-3">
                    <p>{item.name}</p>
                    <p>Cost: ${item.cost}</p>

                    <button
                      className="basketbutton "
                      onClick={() => handleDecrementAddonsQuantity(index)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="basketbutton"
                      onClick={() => handleIncrementAddonsQuantity(index)}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="text-center my-5 fs-3 fs-bold">
          <p className="fs-5 fw-bold">Addons Cost: ${totaladdonscost}</p>
        </div>
      </section>
      {/* <section id="meals">
        <h2 className="text-center my-5">Conference Meals</h2>
        <div className="input-container venue_selection">
          <label htmlFor="numberOfPeople">
            <h3>Number of People:</h3>
          </label>
          <input
            type="number"
            className="input_box5"
            id="numberOfPeople"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
            min="1"
          />
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {mealItems &&
            mealItems.map((item, index) => {
              return (
                <div key={index} className="m-5 ">
                  <div className="text-center mt-3">
                    <p>{item.name}</p>
                    <p>Cost: ${item.cost}</p>
                  </div>
                  <div
                    className="meal_item"
                    key={index}
                    style={{ padding: 15 }}
                  >
                    <div className="inner">
                      <input
                        type="checkbox"
                        id={`meal_${index}`}
                        checked={item.selected}
                        onChange={() => handleMealSelection(index)}
                      />
                      <label htmlFor={`meal_${index}`}> {item.name} </label>
                    </div>
                    <div className="meal_cost">
                      Total Meal Cost: ${item.cost}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section> */}
      {/* <section id="total">
        <h2 className="text-center my-5">Total Cost: ${allcost}</h2>
      </section> */}
      <section id="allcost">
        <Basket />
      </section>
    </>
  );
};

export default Conference;
