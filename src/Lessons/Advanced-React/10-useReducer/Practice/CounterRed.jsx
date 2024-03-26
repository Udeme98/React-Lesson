import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increase":
      state + 1;
    case "decrease":
      state - 1;
    case "reset":
      initialState;
    default:
      state;
  }
};

const CounterRed = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button>Increase</button>
      <button>Decrease</button>
      <button>Reset</button>
    </div>
  );
};
export default CounterRed;
