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
  const displayTitle = () => {
    console.log(title);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button
        onClick={displayTitle}
        style={{ padding: "4px 8px", borderRadius: "5px" }}
      >
        Display Title
      </button>
      <h4>{author}</h4>
    </article>
  );
};

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};
export default BookList;
