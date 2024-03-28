import { useState } from "react";
import { data } from "../../../../data";
import List from "./List";

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
