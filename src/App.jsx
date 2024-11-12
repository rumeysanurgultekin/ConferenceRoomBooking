import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Conference from "./components/Conference";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Basket from "./components/Basket";

function App() {
  const [showVenue, setShowVenue] = useState(false),
    handleShowVeneum = () => {
      setShowVenue(true);
    };
  return (
    <>
      <header className="firstpage">
        <div className="containerf d-flex ">
          <div className="left-side">
            <h1 className="budget_heading">Conference Expense Planner</h1>
            <p className="budget_sentence">
              {" "}
              Plan your next major event with us!
            </p>
            <div className="getstarted_btn ">
              <button
                className="get-started-btn"
                onClick={() => handleShowVeneum()}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="right-side">
            <AboutUs />
          </div>
        </div>
      </header>

      <div className={`event-list-container ${showVenue ? "visible" : ""}`}>
        <Conference />
      </div>
    </>
  );
}

export default App;
