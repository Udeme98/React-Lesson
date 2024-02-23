const BookList = () => {
  const Image = () => (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/913C+MR3S5L._AC_UL600_SR600,400_.jpg"
      alt="novel"
    />
  );
  const Title = () => <h2>The Women</h2>;
  const Author = () => <h4>Kristin Hannah</h4>;

  const Book = () => {
    return (
      <article className="book">
        <Image />
        <Title />
        <Author />
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
