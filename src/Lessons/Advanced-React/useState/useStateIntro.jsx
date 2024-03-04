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
      <br />
      <br />

      <h3>Intial Render and Re-renders</h3>
      <p>
        In a React application, the initial render is the first time that the
        component tree is rendered to the DOM. This is also known as 'mounting'
        the components.
      </p>
      <p>
        Re-render, on the other hand, happen when the component's state or props
        change, and the component needs to be updated in the DOM to reflect
        these changes. React uses a virtual DOM to optimize the process of
        updating the actual DOM, so that only the necessary changes are made.
      </p>

      <h3>Ways to trigger Re-render of React Component:</h3>
      <ul>
        <li>1. By changing the component's state or prop.</li>
        <li>2. When the parent component re-renders.</li>
      </ul>
      <br />
      <br />
      <h3>Hook Rules</h3>
      <ul>
        <li>- Starts with 'use' (both -react and custom hooks).</li>
        <li>- Components must be uppercase.</li>
        <li>- Invoke inside functions/component body.</li>
        <li>- Don't call hooks conditionally.</li>
        <li>- Set functions don't update state immediately</li>
      </ul>
    </>
  );
};
export default UseStateIntro;
