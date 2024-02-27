const books = [
  {
    title: "The Woman",
    author: "Kristin Hannah",
    img: "images/amazon-best.jpg",
  },
  {
    title: "Atomic Habit",
    author: "James Clear",
    img: "images/atomic-habits.png",
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

const names = ["john", "james", "joe"];
const theNames = names.map((name) => {
  return <p>{name}</p>;
});
const BookList = () => {
  return <section className="booklist">{theNames}</section>;
};
export default BookList;
