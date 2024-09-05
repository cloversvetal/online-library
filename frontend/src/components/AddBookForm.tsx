import React, { useState } from "react";
import { Book } from "../types";

interface AddBookProps {
  handleAddBook: (book: Omit<Book, "id">) => void;
}

const AddBookForm: React.FC<AddBookProps> = ({ handleAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [genre, setGenre] = useState("");
  const [stock, setStock] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBook: Omit<Book, "id"> = {
      title,
      author,
      published_year: parseInt(publishedYear),
      genre,
      stock,
    };

    handleAddBook(newBook);

    setTitle("");
    setAuthor("");
    setPublishedYear("");
    setGenre("");
    setStock(0);
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="published_year">Anno</label>
          <input
            type="number"
            id="published_year"
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            value={stock}
            onChange={(e) => setStock(parseInt(e.target.value))}
            required
          />
        </div>

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
