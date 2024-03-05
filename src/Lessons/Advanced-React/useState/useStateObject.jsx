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
  const [name, setName] = useState("Udeme");
  const [age, setAge] = useState(25);
  const [hobby, setHobby] = useState("Listening to great music");

  const changePerson = () => {
    setName("Itoro");
    setAge(24);
    setHobby("Watching a Movie");
  };

  return (
    <>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h4>Enjoys: {hobby}</h4>

      <button
        className="btn"
        style={{ marginTop: "3rem" }}
        onClick={changePerson}
      >
        Change Person
      </button>
    </>
  );
};
export default UseStateObject;
