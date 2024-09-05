import React from "react";
import { Book } from "../types";

interface BookItemProps extends Book {
  isAuthenticated: boolean;
  handleDelete: () => void;
}
// La destrutturazione serve per rendere chiaramente quali props sono utilizzati
const BookItem: React.FC<BookItemProps> = ({
  isAuthenticated,
  handleDelete,
  ...bookProps
}) => {
  return (
    <div className="book-item card" key={bookProps.id}>
      <h2>{bookProps.title}</h2>
      <h3>{bookProps.author}</h3>
      <p>{bookProps.published_year}</p>
      <p>{bookProps.genre}</p>
      <p>{bookProps.stock}</p>

      {isAuthenticated && (
        <div>
          <button onClick={() => alert("Modifica non implementata")}>
            Modifica
          </button>

          <button onClick={handleDelete}>Elimina</button>
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
