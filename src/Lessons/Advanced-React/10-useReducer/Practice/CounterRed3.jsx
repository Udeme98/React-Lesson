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

const CounterRed3 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h5>count - {count}</h5>
      <button style={{ margin: "2px" }} onClick={() => dispatch("increase")}>
        Increase
      </button>
      <button style={{ margin: "2px" }} onClick={() => dispatch("decrease")}>
        Decrease
      </button>
      <button style={{ margin: "2px" }} onClick={() => dispatch("reset")}>
        Reset
      </button>
      <div>
        <h5>count - {countTwo}</h5>
        <button
          style={{ margin: "2px" }}
          onClick={() => dispatchTwo("increase")}
        >
          Increase
        </button>
        <button
          style={{ margin: "2px" }}
          onClick={() => dispatchTwo("decrease")}
        >
          Decrease
        </button>
        <button style={{ margin: "2px" }} onClick={() => dispatchTwo("reset")}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default CounterRed3;
