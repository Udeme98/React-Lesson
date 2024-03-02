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

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = ({ img, title, author, getBook, id }) => {
  //   const displayBook = () => {
  //     getBook(id);
  //   };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => getBook(id)}>Get Book</button>
      {/* <button onClick={displayBook}>Get Book</button> */}
      <h4>{author}</h4>
    </article>
  );
};

export default BookList;
