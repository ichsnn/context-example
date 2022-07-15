import React from "react";
import { CounterConsumer } from "../../../contexts/counter-context";
import CounterBtn from "./CounterBtn";

const DecreaseBtn = () => {
  console.log('decrease')
  return (
    <CounterConsumer>
      {(value) => {
        const { setCount } = value;
        return (
          <CounterBtn
            label="-"
            handle={() => {
              setCount((curValue) => curValue - 1);
            }}
          />
        );
      }}
    </CounterConsumer>
  );
};

export default DecreaseBtn;
