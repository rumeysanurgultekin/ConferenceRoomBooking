import React from "react";
import { useSelector } from "react-redux";

const Basket = () => {
  const { venueItems, totalcost } = useSelector((state) => state.venue);
  const { addonsItems, totaladdonscost } = useSelector((state) => state.addons);

  // Combine venue and addons items
  const allItems = [...venueItems, ...addonsItems];

  return (
    <div
      className=" d-flex justify-content-center flex-column align-items-center"
      id="basket"
      style={{ marginTop: "20px" }}
    >
      <h2 className="text-center my-4 fw-bold">Payment</h2>
      {allItems.length === 0 && <p>No items selected</p>}
      {allItems.some((item) => item.quantity > 0) ? (
        <table className="basket_table">
          <thead>
            <tr>
              <th className="fs-5">Name</th>
              <th className="ps-3 fs-5">Cost</th>
              <th className="ps-3 fs-5"> Quantity</th>
              <th className="ps-3 fs-5">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {allItems
              .filter((item) => item.quantity > 0)
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td className="ps-3 py-2 pe-3">${item.cost}</td>
                  <td className="ps-3 ">{item.quantity}</td>
                  <td className="ps-3">${item.cost * item.quantity}</td>
                </tr>
              ))}
          </tbody>
          <div className="total-cost my-5">
            <p>Total Venue Cost: ${totalcost}</p>
            <p>Total Addons Cost: ${totaladdonscost}</p>
            <p className="fw-bold">
              Grand Total: ${totalcost + totaladdonscost}
            </p>
          </div>
        </table>
      ) : (
        <p>No items selected</p>
      )}
    </div>
  );
};

export default Basket;
