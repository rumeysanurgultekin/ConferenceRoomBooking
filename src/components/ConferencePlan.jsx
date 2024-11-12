import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
} from "../redux/slice/VenueSlice.jsx";

const ConferencePlan = () => {
  // Array'i local state olarak tanımlıyoruz
  const dispatch = useDispatch();

  const venueItems = useSelector((state) => state.venue);

  const handleAddToCart = (index) => {
    if (
      venueItems[index].name === "Auditorium Hall (Capacity:200)" &&
      venueItems[index].quantity >= 3
    ) {
      return; // Prevent further additions
    }
    dispatch(incrementQuantity(index));
  };

  const handleRemoveFromCart = (index) => {
    if (venueItems[index].quantity > 0) {
      dispatch(decrementQuantity(index));
    }
  };
  const calculateTotalCost = (section) => {
    let totalCost = 0;
    if (section === "venue") {
      venueItems.forEach((item) => {
        totalCost += item.cost * item.quantity;
      });
    }
    return totalCost;
  };
  const venueTotalCost = calculateTotalCost("venue");

  return (
    <>
      <navbar className="d-flex flex-row justify-content-between px-5 align-items-center py-3 bg-danger">
        <div className="logo">
          <h2>Conference Planner</h2>
        </div>
        <div className="right-side-navbar d-flex flex-row align-items-center">
          <div className="nav-link">
            <a href="#venue" className="mx-3 text-dark">
              Venue
            </a>
            <a href="#addons" className="mx-3 text-dark">
              Add-ons
            </a>
            <a href="#meals" className="mx-3 text-dark">
              Meals
            </a>
          </div>
          <div className="details-button">
            <button className="btn btn-outline-dark mx-5">Show Details</button>
          </div>
        </div>
      </navbar>

      <section id="venue">
        <h1 className="text-center mt-5 fw-bold">Venue</h1>
        <div className="d-flex flex-wrap p-5">
          {venueItems.map((item, index) => (
            <div
              className="veneu-main border border-primary m-3 p-2"
              key={index}
            >
              <div className="veneu-img">
                <img
                  src={item.img}
                  alt="venue-img"
                  style={{ height: "180px" }}
                />
              </div>
              <div className="text-center my-3">{item.name}</div>
              <div className="text-center">${item.cost}</div>
            </div>
          ))}
        </div>
        <div className="total_cost">Total Cost: ${venueTotalCost}</div>
      </section>
      <section id="addons">
        <h1 className="text-center mt-5 fw-bold">Addons</h1>
        <div className="d-flex flex-wrap p-5">
          {avItems.map((item, index) => (
            <div
              className="veneu-main border border-primary m-3 p-2"
              key={index}
            >
              <div className="veneu-img">
                <img
                  src={item.img}
                  alt="venue-img"
                  style={{ height: "180px" }}
                />
              </div>
              <div className="text-center my-3">{item.name}</div>
              <div className="text-center">${item.cost}</div>
              <div className="text-center">
                <button
                  onClick={() => handleDecrementQuantity(index)}
                  disabled={item.quantity === 0}
                  className="basketbutton "
                >
                  &#8211;
                </button>
                <span>{item.quantity}</span> {/* Quantity gösterimi */}
                <button
                  className="basketbutton "
                  onClick={() => handleIncrementQuantity(index)}
                >
                  +
                </button>
              </div>
              <div className="text-center my-1 fs-1 fw-bold">
                Total Av Coast :
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="all-price"> Total Cost : </div>
    </>
  );
};

export default ConferencePlan;
