import React from "react";
import DecreaseBtn from "./components/DecreaseBtn";
import IncreaseBtn from "./components/IncreaseBtn";

import "./CounterView.css";

const CounterView = () => {
  return (
    <div className="counter-container">
      <div className="counter-value">0</div>
      <div className="counter-btn-group">
        <DecreaseBtn />
        <IncreaseBtn />
      </div>
    </div>
  );
};

export default CounterView;
