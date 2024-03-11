import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);

  useEffect(() => {
    console.log(refContainer);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = refContainer.current.value;
    console.log(inputValue);
  };

  return (
    <div>
      <h2>useRef Hook</h2>
      <ul style={{ textAlign: "left" }}>
        <li>1. Like useState, it preserves the value between the renders.</li>
        <li>2. Updating useRef does not trigger re-render.</li>
        <li>3. Targets DOM nodes/elements.</li>
      </ul>
      <br />

      <h3>useRef Example</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            ref={refContainer}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      <h2>Value: {value}</h2>
      <button onClick={() => setValue((prev) => prev + 1)} className="btn">
        Increase
      </button>
    </div>
  );
};
export default UseRefBasics;
