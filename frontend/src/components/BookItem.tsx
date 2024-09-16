/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Book } from "../types";
import { useState } from "react";
import Button from '@mui/material/Button';

interface BookItemProps extends Book {
  isAuthenticated: boolean;
  handleDelete: () => void;
  handleEdit: (updatedBook: Book) => void;
  handleStartReading: (book: Book) => void;
}
// La destrutturazione serve per rendere chiaramente quali props sono utilizzati
const BookItem: React.FC<BookItemProps> = ({
  isAuthenticated,
  handleDelete,
  handleEdit,
  handleStartReading,
  ...bookProps
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEditedBook] = useState<Book>(bookProps);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Book to edit: ", e.target);
    const { name, value } = e.target; // Entrambe stringhe perchè gli elementi html sono sempre lette come stringe
    let updatedValue: string | number | null = value;

    // Controlla se è un campo numerico e gestisci i valori vuoti
    if (name === "published_year" || name === "stock") {
      if (value === "") {
        updatedValue = null; // Se il campo è vuoto, impostiamo null
      } else {
        updatedValue = parseInt(value); // Altrimenti, convertiamo il valore in intero
        if (isNaN(updatedValue)) {
          updatedValue = 0; // Se la conversione fallisce (non è un numero), impostiamo 0
        }
      }
    }

    setEditedBook((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleEdit(editedBook);
    setIsEditing(false);
  };

  //L'utilizzo di un form richiede handleSubmit
  //Per ogni libro c'è intrinseca la possibilità di modifica che viene attivata solo se isEditing='true'

  if (isEditing) {
    return (
      // editedBook possiede gia dei valori grazie alla riga 19 che utilizza le props
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
          value={editedBook.published_year == null ? 0 : editedBook.published_year }
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
          value={editedBook.stock == null ? "" : editedBook.stock}
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
          <Button variant='contained' color='secondary' onClick={() => setIsEditing(true)}> Modifica </Button>
          <Button variant='contained' color='warning' onClick={() => handleStartReading(bookProps)}>Leggi</Button>
          <Button variant='contained' color='warning' onClick={handleDelete}>Elimina</Button>
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
