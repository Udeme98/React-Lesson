import { useState } from "react";

const TernaryOperator = () => {
  const [isEditing, setEditing] = useState(false);

  return (
    <div>
      <h2>Ternary Operator</h2>
      <p>
        In Javascript, the ternary operator is a way to concisely express a
        simple conditional statement. It is often called the 'conditional
        operator' or the 'ternary conditional operator'.
      </p>
      Basic ternary operator syntax:
      <pre>condition ? expression1 : expression2;</pre>
      <p>
        If condition is truthy, the operator will return expressin1. If
        condition is falsy, it will return expression2.
      </p>
      <button className="btn">{isEditing ? "Edit" : "Add"}</button>
    </div>
  );
};
export default TernaryOperator;
