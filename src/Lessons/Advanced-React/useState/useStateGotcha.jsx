// set-up challenge
// a. set up a state value and the button
// b. add functionality to increase value by 1
// c. log a state value, right after setFunction

import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <h2>useState Gotcha</h2>
      <h3>{value}</h3>
      <button
        className="btn"
        style={{ marginTop: "4rem" }}
        onClick={() => setValue((prev) => prev + 1)}
      >
        Increase
      </button>
    </>
  );
};
export default UseStateGotcha;
