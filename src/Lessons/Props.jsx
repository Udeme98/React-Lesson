const firstBook = {
  title: "The Woman",
  author: "Kristin Hannah",
  img: "images/amazon-best.jpg",
};

const secondBook = {
  title: "Atomic Habit",
  author: "James Clear",
  img: "images/atomic-habits.png",
};

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
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      >
        <p>The children props are using found between Component tags</p>
      </Book>
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
    </section>
  );
};
export default BookList;
