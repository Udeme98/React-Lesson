// set-up challenge
// a. import data
// b. people - default value equal to data
// c. display list(people) in the browser
// create two functions
// i. one that removes single item from the list
// ii. one that clears entire list

import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const rem = people.filter((person) => person.id !== id);
    setPeople(rem);
  };
  const clearAll = () => setPeople([]);

  const showPeople = people.map((person) => {
    const { name, id } = person;
    return (
      <>
        <h4 key={id}>{name}</h4>
        <button onClick={() => removeItem(id)}>Remove Item</button>
      </>
    );
  });

  return (
    <div>
      <div>{showPeople}</div>
      <button
        type="button"
        onClick={clearAll}
        style={{ marginTop: "2rem" }}
        className="btn"
      >
        Clear All
      </button>
    </div>
  );
};
export default UseStateArray;
