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

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
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
      />
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
    </section>
  );
};
export default BookList;
