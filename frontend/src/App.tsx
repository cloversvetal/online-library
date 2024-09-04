/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import BookItem from "./components/BookItem";
import { Book } from "./types";
import axios from "axios";
import BookList from "./components/BookList";
import ResearchForm, { SearchParams } from "./components/ResearchForm";

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:5000/books/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: Book[] = await response.json(); // Assert that data is an array of Book
      setBooks(data);
      setFilteredBooks(data);
    } catch (error) {
      setBooks([]);
      console.error("Errore nel recupero dei libri: ", error);
    }
  };

  const filterBooks = (params: SearchParams) => {
    const filtered = books.filter((book) => {
      return (
        (!params.title ||
          book.title.toLowerCase().includes(params.title.toLowerCase())) &&
        (!params.author ||
          book.author.toLowerCase().includes(params.author.toLowerCase())) &&
        (!params.genre ||
          book.genre.toLowerCase().includes(params.genre.toLowerCase())) &&
        (!params.yearFrom || book.published_year >= params.yearFrom) &&
        (!params.yearTo || book.published_year <= params.yearTo)
      );
    });
    setFilteredBooks(filtered);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <h1> Elenco libri </h1>
      <ResearchForm onSearch={filterBooks} />
      <BookList books={filteredBooks}></BookList>
    </div>
  );
}

export default App;
