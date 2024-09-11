/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Book } from "../types";
import { useState } from "react";

interface BookItemProps extends Book {
  isAuthenticated: boolean;
  handleDelete: () => void;
  handleEdit: (updatedBook: Book) => void;
}
// La destrutturazione serve per rendere chiaramente quali props sono utilizzati
const BookItem: React.FC<BookItemProps> = ({
  isAuthenticated,
  handleDelete,
  handleEdit,
  ...bookProps
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEditedBook] = useState<Book>(bookProps);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedBook((prev) => ({
      ...prev,
      [name]:
        name === "published_year" || name === "stock" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleEdit(editedBook);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit} className="book-item card">
        <input
          name="title"
          value={editedBook.title}
          onChange={handleInputChange}
          required
        />
        <input
          name="author"
          value={editedBook.author}
          onChange={handleInputChange}
          required
        />
        <input
          name="published_year"
          type="number"
          value={editedBook.published_year}
          onChange={handleInputChange}
          required
        />
        <input
          name="genre"
          value={editedBook.genre}
          onChange={handleInputChange}
          required
        />
        <input
          name="stock"
          type="number"
          value={editedBook.stock}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Save</button>
        <button type="button" onClick={() => setIsEditing(false)}>
          Cancel
        </button>
      </form>
    );
  }

  return (
    <div className="book-item card" key={bookProps.id}>
      <h2>{bookProps.title}</h2>
      <h3>{bookProps.author}</h3>
      <p>{bookProps.published_year}</p>
      <p>{bookProps.genre}</p>
      <p>{bookProps.stock}</p>

      {isAuthenticated && (
        <div>
          <button onClick={() => setIsEditing(true)}> Modifica </button>

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
