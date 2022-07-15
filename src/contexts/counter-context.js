import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export const CounterConsumer = ({ children }) => {
  return <CounterContext.Consumer>{children}</CounterContext.Consumer>;
};

export const useCounter = () => useContext(CounterContext);
