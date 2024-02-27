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

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, author, title, id } = book;
        return <Book img={img} author={author} title={title} key={id} />;
      })}
    </section>
  );
};
export default BookList;
