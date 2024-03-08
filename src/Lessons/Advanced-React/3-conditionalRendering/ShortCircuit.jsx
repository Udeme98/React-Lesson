const ShortCircuit = () => {
  return (
    <div>
      <h2>Truthy and Falsy Values</h2>
      <p>
        In Vanilla JS, a value is considered 'truthy' if it is evaluated to true
        when used in a boolean context.
      </p>
      <p>
        In Vanilla JS, a value is considered 'falsy' if it is evaluated to false
        when used in a boolean context.
      </p>
      <h3>List of falsy values:</h3>
      <ul>
        <li>- false</li>
        <li>- 0 (zero)</li>
        <li>- ""(empty string)</li>
        <li>- null</li>
        <li>- undefined</li>
      </ul>
      <p>
        All other values, including objects and arrays, are considered truthy.
      </p>
      <br />

      <h2>Short Circuit Evaluation</h2>
      <p>
        In JS, short circuit evaluation is a technique that allows you to use
        logical operators (such as && and ||) to perform conditional evaluations
        in a concise way.
      </p>
      <p>
        - Logical AND (&&) returns the first operand if it is 'falsy', or the
        second operand if it is 'truthy'.
      </p>
      <p>
        - Logical OR (||) returns the first operand if it is 'truthy', or the
        second operand if the first operand is 'falsy'.
      </p>
    </div>
  );
};
export default ShortCircuit;
