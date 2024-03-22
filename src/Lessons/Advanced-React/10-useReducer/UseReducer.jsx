// overview:
// useReducer hook acts as a light version of Redux(State Management Library)

//task:
// create func that set's people back to data array
// create another button similar to clear for reset
// use conditional rendering to toggle between the buttons, depending on people value

import { useReducer } from "react";
import { data } from "../../../data";

const defaultState = {
  people: data,
};

const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  throw new Error(`No matching '${action.type}' - action type`);
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  console.log(state);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const reset = () => {
    dispatch({ type: RESET_LIST });
  };

  return (
    <div>
      <h3>UseReducer</h3>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <br />
      {state.people.length > 0 ? (
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
