import React from "react";
import BookItem from "./BookItem";
import { Book } from "../types";

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p>Nessun libro trovato.</p>
      ) : (
        books.map((book) => <BookItem key={book.id} {...book} />)
      )}
    </div>
  );
};

export default BookList;
