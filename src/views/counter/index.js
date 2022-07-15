import React from "react";
import { CounterConsumer } from "../../contexts/counter-context";
import DecreaseBtn from "./components/DecreaseBtn";
import IncreaseBtn from "./components/IncreaseBtn";

import "./CounterView.css";

const CounterView = () => {
  console.log('root view')
  return (
    <div className="counter-container">
      <CounterConsumer>
        {(value) => {
          const {count} = value
          return <div className="counter-value">{count}</div>;
        }}
      </CounterConsumer>
      <div className="counter-btn-group">
        <DecreaseBtn />
        <IncreaseBtn />
      </div>
    </div>
  );
};

export default CounterView;
