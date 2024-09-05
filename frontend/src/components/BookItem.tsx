import React from "react";
import { Book } from "../types";

interface BookItemProps extends Book {
  isAuthenticated: boolean;
  onDelete: () => void;
}
// La destrutturazione serve per rendere chiaramente quali props sono utilizzati
const BookItem: React.FC<BookItemProps> = ({
  id,
  title,
  author,
  published_year,
  genre,
  stock,
  isAuthenticated,
  onDelete,
}) => {
  return (
    <div className="book-item card" key={id}>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{published_year}</p>
      <p>{genre}</p>
      <p>{stock}</p>
      {isAuthenticated && (
        <div>
          <button onClick={() => alert("Modifica non implementata")}>
            Modifica
          </button>
          <button onClick={onDelete}>Elimina</button>
        </div>
      )}
    </div>
  );
};

export default BookItem;

// Senza destrutturazione
/* 
const BookItem: React.FC<Book> = (props) => {
  return (
    <div className="book-item card" key={props.id}>
      <h2> {props.title} </h2>
      <h3> {props.author}</h3>
      <p> {props.published_year} </p>
      <p> {props.genre}</p>
      <p> {props.stock} </p>
    </div>
  );
};
*/
