// overview:
// useReducer hook acts as a light version of Redux(State Management Library)

//task:
// create func that set's people back to data array
// create another button similar to clear for reset
// use conditional rendering to toggle between the buttons, depending on people value

import { useReducer, useState } from "react";
import { data } from "../../../data";

const defaultValue = () => {
  people: data;
};
const reducer = () => {};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, defaultValue);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearList = () => {
    // setPeople([]);
  };

  const reset = () => setPeople(data);

  const [people, setPeople] = useState(data);
  return (
    <div>
      <h3>UseReducer</h3>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <br />
      {people.length > 0 ? (
        <button className="btn" onClick={clearList}>
          Clear All
        </button>
      ) : (
        <button className="btn" onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
};
export default UseReducer;
