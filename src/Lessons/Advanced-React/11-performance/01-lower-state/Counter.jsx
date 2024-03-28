import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        className="btn"
        style={{ marginBottom: "1rem" }}
        onClick={() => setCount((prev) => prev + 1)}
      >
        count - {count}
      </button>
    </div>
  );
};
export default Counter;
