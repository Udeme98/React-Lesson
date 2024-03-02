// Topics
// * Props in React
// * Props - somewhat dynamic
// * Props - multiple approaches
// * Children props
// * Props - Simple/Proper list
// * Key prop
// * Passing entire object as props

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
