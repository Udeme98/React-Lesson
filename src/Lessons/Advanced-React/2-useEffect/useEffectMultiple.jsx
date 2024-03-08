import { useEffect, useState } from "react";

const UseEffectMultiple = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log("hello from first use effect");
  }, [value]);

  useEffect(() => {
    console.log("hello from second use effect");
  }, [secondValue]);

  return (
    <div>
      <h1>Value: {value}</h1>
      <button
        className="btn"
        style={{ marginTop: "1rem" }}
        onClick={() => setValue((prev) => prev + 1)}
      >
        value
      </button>
      <h1>Second Value: {secondValue}</h1>
      <button
        className="btn"
        style={{ marginTop: "1rem" }}
        onClick={() => setSecondValue((prev) => prev + 1)}
      >
        second value
      </button>
    </div>
  );
};
export default UseEffectMultiple;
