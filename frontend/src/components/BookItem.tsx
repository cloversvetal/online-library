import React from "react";
import { Book } from "../types";

const BookItem: React.FC<Book> = ({
  id,
  title,
  author,
  published_year,
  genre,
  stock,
}) => {
  return (
    <div className="book-item card" key={id}>
      <h2> {title} </h2>
      <h3> {author}</h3>
      <p> {published_year} </p>
      <p> {genre}</p>
      <p> {stock} </p>
    </div>
  );
};

export default BookItem;
