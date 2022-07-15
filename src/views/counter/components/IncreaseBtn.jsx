import React from "react";
import { CounterConsumer} from "../../../contexts/counter-context";
import CounterBtn from "./CounterBtn";

const IncreaseBtn = () => {
  console.log('increase')
  return (
    <CounterConsumer>
      {(value) => {
        const { setCount } = value;
        return (
          <CounterBtn
            label="+"
            handle={() => {
              setCount((curValue) => curValue + 1);
            }}
          />
        );
      }}
    </CounterConsumer>
  );
};

export default IncreaseBtn;
