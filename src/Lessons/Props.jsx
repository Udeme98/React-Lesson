const title = "The Woman";
const author = "Kristin Hannah";
const img = "../../public/images/amazon-best.jpg";
const BookList = () => {
  const Book = () => {
    return (
      <article className="book">
        <img src={img} alt="novel" />
        <h2>{title}</h2>
        <h4>{author}</h4>
      </article>
    );
  };

  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};
export default BookList;
