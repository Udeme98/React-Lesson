const BookList = () => {
  const Image = () => (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/913C+MR3S5L._AC_UL600_SR600,400_.jpg"
      alt="novel"
    />
  );
  const Title = () => <h3>The Women: A Novel</h3>;
  const Author = () => <h4>By: Kristin Hannah</h4>;

  const Book = () => {
    return (
      <article>
        <Image />
        <Title />
        <Author />
      </article>
    );
  };

  return (
    <section>
      <Book />
    </section>
  );
};
export default BookList;
