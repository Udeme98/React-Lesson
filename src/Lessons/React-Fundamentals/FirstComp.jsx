const FirstComp = () => {
  return (
    <>
      <h1>Intro to React</h1>
      <p>React is a Javascript library for building User Interfaces.</p>

      <h2>Important Tips</h2>
      <ul>
        <li>Built, developed and maintained by Facebook (Meta).</li>
        <li>Released in 2013.</li>
        <li>It is a component based library.</li>
      </ul>

      <h2>Component</h2>
      <p>
        Components are independent chunks of User Interafaces. Components helps
        make our codes 'Reusable'.
      </p>
      <p>
        Components are usually created with functions, either declarative or an
        arrow function.
      </p>
      <ul>
        <li>React components starts with a capital letter.</li>
        <li>React components must return JSX.</li>
        <li>React components must have a closing tag.</li>
      </ul>

      <h2>JSX Rules</h2>
      <ul>
        <li>Return single element(One parent element).</li>
        <li>Use Semantic section/article instead of div.</li>
        <li>Use Fragments.</li>
        <li>camelCase property naming convention.</li>
        <li>'className' instead of 'class'.</li>
        <li>close every element.</li>
      </ul>
    </>
  );
};

export default FirstComp;
