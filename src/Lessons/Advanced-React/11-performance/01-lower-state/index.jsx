import { useState } from "react";
import { data } from "../../../../data";
import List from "./List";

// - By changing the component's state or props. When the component's state or props change, React will re-render the component to reflect these changes.
//- When the parent element re-renders, even if the component's state or props have not changed.

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  return (
    <section>
      <button
        className="btn"
        style={{ marginBottom: "1rem" }}
        onClick={() => setCount((prev) => prev + 1)}
      >
        count - {count}
      </button>

      <List people={people} />
    </section>
  );
};
export default LowerState;
