import { createContext, useReducer } from "react";
import CounterText2 from "./CounterText2";

export const CountContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const counterText = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <h5>count - {count}</h5>
        <CounterText2 />
      </CountContext.Provider>
    </div>
  );
};
export default counterText;
