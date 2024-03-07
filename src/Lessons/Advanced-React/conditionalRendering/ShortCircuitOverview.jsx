// setup challenge
// 1. create two state values
// 2. one 'falsy' and second 'truthy'
// 3. setup both conditions for each operator in JSX

import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Udeme");

  return (
    <div>
      <h4>Falsy OR: {text || "hello world"}</h4>
      <h4>Falsy AND: {text && "hello world"}</h4>
      <h4>Truthy OR: {name || "hello world"}</h4>
      <h4>Truthy AND: {name && "hello world"}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
