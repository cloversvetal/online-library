import React from "react";
import BookItem from "./BookItem"; // Serve per renderizzare i singoli libri dentro la lista
// Visto che BookList contiene elementi BookItem devo importarlo
import { Book } from "../types"; // Esportazione nominata per specificare quali componenti esattamente importare

// Forma delle props per il componente BookList
interface BookListProps {
  books: Book[];
  isAuthenticated: boolean;
  handleDelete: (id: number) => void;
  handleEdit: (updatedBook: Book) => void;
}

// Componente BookList; le props sono sempre passate come un oggetto con una chiave (books in questo caso)
// In questo caso BookList si aspetta props di tipo 'BookListProps'
// le props qui sono destrutturate, altrimenti basta fare ({props})
const BookList: React.FC<BookListProps> = ({
  books,
  isAuthenticated,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p>Nessun libro trovato.</p>
      ) : (
        books.map((book) => (
          <BookItem
            key={book.id}
            {...book}
            isAuthenticated={isAuthenticated}
            handleDelete={() => handleDelete(book.id)}
            handleEdit={handleEdit}
          />
        )) // Passo tutte le proprietà di book a BookItem
      )}
    </div>
  );
};

export default BookList;
