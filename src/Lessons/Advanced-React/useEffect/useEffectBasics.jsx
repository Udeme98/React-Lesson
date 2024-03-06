import { useState } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log("hello world");
    //setValue(value+1); will definitely cause an infinite loop
  };
  //sayHello();

  return (
    <div>
      <h1>useEffect Basics</h1>
      <p>
        useEffect is a hook in React that allows you to perform side effects in
        function component (basically any work outside of the component).
      </p>
      Some examples of side effects are:
      <ul>
        <li>a. subscriptions</li>
        <li>b. fetching data</li>
        <li>c. directly updating the DOM</li>
        <li>d. event listener</li>
        <li>e. timers, etc</li>
      </ul>
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
export default UseEffectBasics;
