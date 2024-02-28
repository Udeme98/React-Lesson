const books = [
  {
    title: "The Woman",
    author: "Kristin Hannah",
    img: "images/amazon-best.jpg",
    id: 1,
  },
  {
    title: "Atomic Habit",
    author: "James Clear",
    img: "images/atomic-habits.png",
    id: 2,
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
