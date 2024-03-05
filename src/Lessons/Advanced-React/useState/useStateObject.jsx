// set-up challenge
// a. set up three state values: name(string), age(number), hobby(string)
// b. render in the browser
//
// create a button
// setup a function
// i. update all three state values
// ii. once the user clicks the button, new person is displayed in the browser

import { useState } from "react";

const UseStateObject = () => {
  //   const [name, setName] = useState("Udeme");
  //   const [age, setAge] = useState(25);
  //   const [hobby, setHobby] = useState("Listening to great music");

  //   const changePerson = () => {
  //     setName("Itoro");
  //     setAge(24);
  //     setHobby("Watching a Movie");
  //   };

  //using object
  const [person, setPerson] = useState({
    name: "Udeme",
    age: 24,
    hobby: "Listening to great music",
  });

  const changePerson = () => {
    setPerson({ name: "Itoro", age: 24, hobby: "Watching a Movie" });
    setPerson({ ...person, name: "Goodness" }); // overriding a particular value
    // setName("Itoro");
    // setAge(24);
    // setHobby("Watching a Movie");
  };

  return (
    <>
      <h2>Name: {person.name}</h2>
      <h3>Age: {person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>

      <button
        className="btn"
        style={{ marginTop: "3rem" }}
        onClick={changePerson}
      >
        Change Person
      </button>

      <br />
      <br />
      <h2>Automatic Bashing</h2>
      <p>
        In React, 'batching' refers to the process of grouping multiple state
        updates into a single update.
      </p>
      <p>
        By default, React uses a technique called 'auto-batching' to group state
        updates that occur within the same event loop into a single update.
      </p>
      <p>
        React v18 ensures that state updates invoked from any location will
        batched by default. This will batch state updates, including native
        event handlers, asynchronous operations,timeouts, and intervals.
      </p>
    </>
  );
};
export default UseStateObject;
