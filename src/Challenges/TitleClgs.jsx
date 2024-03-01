//aim - set up a title

import BookCard from "../Lessons/Es6 Modules/BookCard";
import { books } from "../Lessons/Es6 Modules/books";

const TitleClgs = () => {
  return (
    <>
      <h2 className="book-heading">Amazon Best Selling Books</h2>
      <section className="booklist">
        {books.map((book, index) => {
          return <BookCard {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};
export default TitleClgs;
