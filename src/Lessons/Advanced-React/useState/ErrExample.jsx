// setup challenge:
// 1. create count variable
// 2. display value in JSX
// 3. add button and increase the value

const ErrExample = () => {
  let count = 0;
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => console.log((count = count + 1))} className="btn">
        Increase
      </button>
    </div>
  );
};
export default ErrExample;
