const title = "The Woman";
const author = "Kristin Hannah";
const img = "images/amazon-best.jpg";

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
      <Book title={title} author={author} img={img} />
      <Book title={title} author={author} img={img} />
    </section>
  );
};
export default BookList;
