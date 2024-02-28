const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log("handle form input");
  };

  const handleButtonClick = () => {
    console.log("handle button click");
  };

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
          onChange={handleFormInput}
        />
      </form>
      <button onClick={handleButtonClick}>Click Me!</button>
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
