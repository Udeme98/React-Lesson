import { useEffect, useRef, useState } from "react";

const PersonalExample = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
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
        />
      </form>
      <h4>I rendered {renderCount.current} times..</h4>
    </div>
  );
};
export default PersonalExample;
