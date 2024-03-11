const UseRefBasics = () => {
  return (
    <div>
      <h2>useRef Hook</h2>
      <ul style={{ textAlign: "left" }}>
        <li>1. Like useState, it preserves the value between the renders.</li>
        <li>2. Updating useRef does not trigger re-render.</li>
        <li>3. Targets DOM nodes/elements.</li>
      </ul>
    </div>
  );
};
export default UseRefBasics;
