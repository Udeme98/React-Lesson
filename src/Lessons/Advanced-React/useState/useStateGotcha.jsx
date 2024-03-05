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
      <br />
      <br />

      <h2>usestate function approach</h2>
      <p>
        If you want to update the state immediately and synchronousy, you can
        pass a function to setState that receives the previous state as an
        argument and returns the new state.
      </p>
      <pre>//setState(prevState=(...prevState, value:newValue))</pre>
      <p>
        This can be useful if you need to update the state based on the previous
        state, or if you need to update the state synchronously.
      </p>
    </>
  );
};
export default UseStateGotcha;
