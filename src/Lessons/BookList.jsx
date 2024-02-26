const BookList = () => {
  const Image = () => (
    <img src="../../public/images/amazon-best.jpg" alt="novel" />
  );
  const Title = () => {
    const inlineHeadingStyles = {
      color: "#223",
    };
    return <h2 style={inlineHeadingStyles}>The Women</h2>;
  };
  const Author = () => (
    <h4 style={{ color: "#617d98", fontSize: "0.8rem", marginTop: "0.5rem" }}>
      Kristin Hannah
    </h4>
  );

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
