// Topics
// * Component Feature
// * Prop drilling

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

const Book = ({ img, title, author, displayValue }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button
        onClick={displayValue}
        style={{ padding: "4px 8px", borderRadius: "5px" }}
      >
        Click Me
      </button>
      <h4>{author}</h4>
    </article>
  );
};

const BookList = () => {
  const someValue = "shakeAndBake";
  const displayValue = () => {
    console.log(someValue);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue={displayValue} />;
      })}
    </section>
  );
};
export default BookList;
