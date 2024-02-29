// Topics
// * Events Basic
// * Forms
// * Form Gotcha
// * Arrow Function

const EventExamples = () => {
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          style={{ margin: "1rem 0" }}
          name="example"
          onChange={(e) => console.log(e.target.value)}
        />
        <button onClick={() => console.log("click me")} type="button">
          Click Me!
        </button>
        <button>Submit</button>
      </form>
    </section>
  );
};

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
    </section>
  );
};
export default BookList;
