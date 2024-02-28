const books = [
  {
    id: 1,
    title: "The Woman",
    author: "Kristin Hannah",
    img: "images/amazon-best.jpg",
  },
  {
    id: 2,
    title: "Atomic Habit",
    author: "James Clear",
    img: "images/atomic-habits.png",
  },
];

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const EventExamples = () => {
  const handleFormInput = () => {
    console.log("handle form input");
  };
  const handleButtonClick = () => {
    console.log("handle button click");
  };

  return (
    <section>
      <form>
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
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};
export default BookList;
