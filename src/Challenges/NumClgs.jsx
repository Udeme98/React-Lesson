// Aim - To get the correct number for our book

import BookCard from "../Lessons/Es6 Modules/BookCard";
import { books } from "../Lessons/Es6 Modules/books";

const NumClgs = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <BookCard {...book} key={book.id} number={index} />;
      })}
    </section>
  );
};
export default NumClgs;
