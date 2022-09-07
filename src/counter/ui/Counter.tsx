import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCouterValue } from "../sm/counterSelectors";
import { counterActions } from "../sm/counterSlice";

const spanStyle: React.HTMLAttributes<HTMLSpanElement>["style"] = {
  marginLeft: "0.5em"
};

const Counter = () => {
  const dispatch = useDispatch();

  const value = useSelector(selectCouterValue);

  const handleIncrementClick = () => {
    dispatch(counterActions.increment());
  };
  const handleIncrementAsyncClick = () => {
    dispatch(counterActions.incrementAsync());
  };
  const handleDecrementClick = () => {
    dispatch(counterActions.decrement());
  };
  const handleDecrementAsyncClick = () => {
    dispatch(counterActions.decrementAsync());
  };

  return (
    <p>
      Clicked: {value} times
      <span style={spanStyle}>
        <button onClick={handleIncrementClick}>
          <span>+</span>
        </button>
      </span>
      <span style={spanStyle}>
        <button onClick={handleIncrementAsyncClick}>
          <span>Increment async</span>
        </button>
      </span>
      <span style={spanStyle}>
        <button onClick={handleDecrementClick}>
          <span>-</span>
        </button>
      </span>
      <span style={spanStyle}>
        <button onClick={handleDecrementAsyncClick}>
          <span>Decrement async</span>
        </button>
      </span>
    </p>
  );
};

export default Counter;
