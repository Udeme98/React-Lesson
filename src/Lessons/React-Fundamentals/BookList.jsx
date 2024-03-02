// Topics
// * Adding CSS to a project
// * Images in React
// * JSX - CSS
// * JSX - JavaScript

const BookList = () => {
  const Book = () => {
    const title = "The Woman";
    return (
      <article className="book">
        <img src="../../public/images/amazon-best.jpg" alt="novel" />
        <h2>{title}</h2>
        <h4>Kristin Hannah</h4>
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
