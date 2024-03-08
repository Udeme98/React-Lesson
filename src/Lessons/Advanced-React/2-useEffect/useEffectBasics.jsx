import { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log("hello world");
    //setValue(value+1); will definitely cause an infinite loop
  };
  //sayHello();

  useEffect(() => {
    sayHello();
  }, []);

  return (
    <div>
      <h1>useEffect Basics</h1>
      <p>
        useEffect is a hook in React that allows you to perform side effects in
        function component (basically any work outside of the component).
      </p>
      <h4>Some examples of side effects are:</h4>
      <ul>
        <li>a. subscriptions</li>
        <li>b. fetching data</li>
        <li>c. directly updating the DOM</li>
        <li>d. event listener</li>
        <li>e. timers, etc</li>
      </ul>

      <h4>Important Info:</h4>
      <ul>
        <li>i. useEffect hook accepts two arguments (second optional)</li>
        <li>ii. first argument (callback function)</li>
        <li>iii. second argument (dependency array)</li>
        <li>iv. by default, runs on each render (initial and re-render)</li>
        <li>v. callbacks can't return promise (so can't make it async)</li>
        <li>
          vi. if dependency array is empty ([]), runs only on initial render
        </li>
      </ul>

      <h3>Value: {value}</h3>
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
