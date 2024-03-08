import { useState } from "react";

const ShortCircuitExample = () => {
  const [text, setText] = useState(""); //falsy
  const [name, setName] = useState("Udeme"); //truthy
  const [user, setUser] = useState({ name: "Joe" }); //truthy
  const [isEditing, setIsEditing] = useState(false); //falsy

  return (
    <div>
      <h3>Short Circuit Examples</h3>
      <h4>{text || "default value"}</h4>
      {user && <SomeComponent name={user.name} />}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h3>Returns name</h3>
      <h4>{name}</h4>
    </div>
  );
};

export default ShortCircuitExample;
