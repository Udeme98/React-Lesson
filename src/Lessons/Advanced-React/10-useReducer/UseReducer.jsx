// overview:
// useReducer hook acts as a light version of Redux(State Management Library)

import { useState } from "react";
import { data } from "../../../data";

const UseReducer = () => {
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearList = () => setPeople([]);

  const [people, setPeople] = useState(data);
  return (
    <div>
      <h3>UseReducer</h3>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={clearList}>
        Clear All
      </button>
    </div>
  );
};
export default UseReducer;
