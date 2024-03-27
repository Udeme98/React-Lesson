import { useContext } from "react";
import { CountContext } from "./CounterTexxt";

const CounterText2 = () => {
  const { countDispatch, countState } = useContext(CountContext);

  return (
    <div>
      <button
        className="btn"
        style={{ margin: "2px" }}
        onClick={() => countDispatch("increase")}
      >
        Increase
      </button>
      <button
        className="btn"
        style={{ margin: "2px" }}
        onClick={() => countDispatch("decrease")}
      >
        Decrease
      </button>
      <button
        className="btn"
        style={{ margin: "2px" }}
        onClick={() => countDispatch("reset")}
      >
        Reset
      </button>
    </div>
  );
};
export default CounterText2;
