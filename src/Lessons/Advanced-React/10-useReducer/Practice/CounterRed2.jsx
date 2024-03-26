import { useReducer } from "react";

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

const CounterRed2 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h5>count - {count}</h5>
      <button
        className="btn"
        style={{ margin: "2px" }}
        onClick={() => dispatch("increase")}
      >
        Increase
      </button>
      <button
        className="btn"
        style={{ margin: "2px" }}
        onClick={() => dispatch("decrease")}
      >
        Decrease
      </button>
      <button
        className="btn"
        style={{ margin: "2px" }}
        onClick={() => dispatch("reset")}
      >
        Reset
      </button>
    </div>
  );
};
export default CounterRed2;
