import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { firstCounter: state.firstCounter + action.value };
    case "decrease":
      return { firstCounter: state.firstCounter - action.value };
    case "increase5":
      return { firstCounter: state.firstCounter + action.value };
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
      <h5>count - {count.firstCounter}</h5>
      <button
        className="btn"
        style={{ margin: "2px" }}
        onClick={() => dispatch({ type: "increase", value: 1 })}
      >
        Increase
      </button>
      <button
        className="btn"
        style={{ margin: "2px" }}
        onClick={() => dispatch({ type: "decrease", value: 1 })}
      >
        Decrease
      </button>
      <button
        className="btn"
        style={{ margin: "2px" }}
        onClick={() => dispatch({ type: "increase5", value: 5 })}
      >
        Increase 5
      </button>
      <button
        className="btn"
        style={{ margin: "2px" }}
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
};
export default CounterRed2;
