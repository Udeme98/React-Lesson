import useToggle from "./useToggle";

const ToggleExample = () => {
  const { show, toggle } = useToggle(false);
  return (
    <div>
      <h2>Custom Hooks</h2>
      <ul style={{ textAlign: "left" }}>
        <li>1. Same rules as regular hooks.</li>
        <li>2. Simplify component(less code).</li>
        <li>3. Re-use functionality.</li>
      </ul>
      <br />

      <h4>Toggle custom hook</h4>
      <button onClick={() => toggle((prev) => !prev)} className="btn">
        Toggle
      </button>
      {show && <h4>Some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
