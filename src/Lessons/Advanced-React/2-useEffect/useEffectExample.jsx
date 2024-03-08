import { useState } from "react";

const UseEffectExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log("hello world");
    //setValue(value+1); will definitely cause an infinite loop
  };
  sayHello();
  return (
    <div>
      <h1>useEffectExample</h1>
      <h2>Value: {value}</h2>
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => setValue((prev) => prev + 1)}
      >
        Increase
      </button>
    </div>
  );
};
export default UseEffectExample;
