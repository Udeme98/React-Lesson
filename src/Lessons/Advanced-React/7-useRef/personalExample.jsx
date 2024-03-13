import { useEffect, useRef, useState } from "react";

const PersonalExample = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const inputFocus = useRef(null);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  useEffect(() => {
    inputFocus.current.focus();
  });

  return (
    <div>
      <h3>personal Example</h3>
      <form className="form">
        <label htmlFor="name" className="form-label">
          name:
        </label>
        <input
          id="name"
          type="text"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={inputFocus}
        />
      </form>
      <h4>I rendered {renderCount.current} times..</h4>
    </div>
  );
};
export default PersonalExample;
