// setup challenge:
// 1. create state value
// 2. in jsx return button which toggles state value
// 3. based on condition return second component (simple return)
// 4. inside second component create useEffect and run it only on initial render

import { useEffect, useState } from "react";

const UseEffectCleanup = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <h2>UseEffect Cleanup</h2>
      {toggle && <SecondComponent />}
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
    </div>
  );
};

const SecondComponent = () => {
  useEffect(() => {
    //console.log("hello world");
    // const intId = setInterval(() => {
    //   console.log("hello from interval");
    // }, 1000);
    // return () => {
    //   clearInterval(intId);
    // };

    const someFunc = () => {
      //some logic
    };
    window.addEventListener("scroll", someFunc);
    return () => window.removeEventListener("scroll", someFunc);
  }, []);
};
export default UseEffectCleanup;
