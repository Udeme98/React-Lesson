// Suspense API:
// The suspense API is a feature in React that allows you to manage the loading state of your components. It provides a way to 'suspend' rendering of a component until some data has been fetched, and display a fallback UI in the meantime. This makes it easier to handle asynchronous data loading and provide a smooth user experience in your React Application.

import { useState, useTransition, Suspense, lazy } from "react";
const SlowComponent = lazy(() => import("./SlowComponent"));

const LatestReact = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);

    //slow down CPU
    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg" alt="" />
          </div>
        );
      });
      setItems(newItems);
    });
  };

  return (
    <section>
      <form className="form">
        <input
          type="text"
          className="form-input"
          value={text}
          onChange={handleChange}
        />
      </form>

      <h4>Items Below</h4>
      {isPending ? (
        <h4>Loading...</h4>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginTop: "2rem",
          }}
        >
          {items}
        </div>
      )}
      <button onClick={() => setShow(!show)} className="btn">
        toggle
      </button>
      {show && (
        <Suspense>
          <SlowComponent fallback={<h4>Loading...</h4>} />
        </Suspense>
      )}
    </section>
  );
};
export default LatestReact;
