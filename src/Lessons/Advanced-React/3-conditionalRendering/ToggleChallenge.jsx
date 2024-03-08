// setup challenge:
// 1. create state value (boolean)
// 2. return a button and a component/element
// 3. when user clicks the button
//  - toggle state value
//  - conditionally render component/element

import { useState } from "react";

const ToggleChallenge = () => {
  const [isShown, setIsShown] = useState(true);

  return (
    <div>
      <h2>Toggle Challenge</h2>

      {/* <h3>{isShown ? "Hello World is Showing..!" : " "}</h3> */}
      <h3>{isShown && "Hello World is Showing..!"}</h3>
      <button className="btn" onClick={() => setIsShown(!isShown)}>
        Toggle
      </button>
    </div>
  );
};
export default ToggleChallenge;
