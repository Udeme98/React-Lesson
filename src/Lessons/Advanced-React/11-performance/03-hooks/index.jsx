// React.memo(Component) - returns memoized component

// useCallback hook - The useCallback hook in React allows you to memoize a function. It takes two arguments: The first is the function you want to memoize, and the second is an array of dependencies. The hook will return a memoized version of the function that only changes if one of the values in the dependency array changes.

// By memoizing the function, you can avoid unnecessary re-renders and improve the performance of your React application.
// The function will only be re-created if one of it's dependencies changes, otherwise the same instance of the function will be returned.

// useMemo hook - The useCallback hook in React allows you to memoize a value. It takes two arguments: The first is the function that returns the value you want to memoize, and the second is an array of dependencies. The hook will return a memoized value only changes if one of the values in the dependency array changes.

import { useCallback, useMemo, useState } from "react";
import { data } from "../../../../data";
import List from "./List";
import slowFunction from "./slowFunction";

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const value = useMemo(() => slowFunction(), []);
  const removePerson = useCallback(
    (id) => {
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    },
    [people]
  );

  console.log(value);

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        Count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;
