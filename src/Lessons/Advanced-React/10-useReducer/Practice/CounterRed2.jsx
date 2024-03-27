import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 5,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrease":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increase5":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "increase-2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrease-2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "increase5-2":
      return { ...state, secondCounter: state.secondCounter + action.value };
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
      <h4>First Counter</h4>
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

      <br />
      <br />

      <h4>Second Counter</h4>
      <h5>count - {count.secondCounter}</h5>
      <button
        className="btn"
        style={{ margin: "2px" }}
        onClick={() => dispatch({ type: "increase-2", value: 1 })}
      >
        Increase
      </button>
      <button
        className="btn"
        style={{ margin: "2px" }}
        onClick={() => dispatch({ type: "decrease-2", value: 1 })}
      >
        Decrease
      </button>
      <button
        className="btn"
        style={{ margin: "2px" }}
        onClick={() => dispatch({ type: "increase5-2", value: 5 })}
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
