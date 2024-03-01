import { books } from "./books";
import BookCard from "./BookCard";

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <BookCard {...book} key={book.id} />;
      })}
    </section>
  );
};
export default BookList;
