import { useState } from "react";

const UseStateIntro = () => {
  //console.log(useState(25));
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>UseState Basics</h2>
      <h3>useState hook</h3>
      <ul>
        <li>
          Returns an array with two elements: the current state value, and a
          function that we can use to update the state
        </li>
        <li>Accepts default value as an argument</li>
        <li>State update triggers re-render</li>
        <li>We use array destructuring to get the values from useState</li>
      </ul>
      <br />
      <h3>Example</h3>
      <p>You clicked the button {count} times</p>
      <button onClick={() => setCount((prev) => prev + 1)} className="btn">
        Click Me!
      </button>
    </>
  );
};
export default UseStateIntro;
