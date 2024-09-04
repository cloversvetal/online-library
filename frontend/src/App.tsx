/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import BookItem from "./components/BookItem";
import { Book } from "./types";
import axios from "axios";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:5000/books/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: Book[] = await response.json(); // Assert that data is an array of Book
      setBooks(data);
    } catch (error) {
      setBooks([]);
      console.error("Errore nel recupero dei libri: ", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <h1> Elenco libri </h1>
      <BookList books={books}></BookList>
    </div>
  );
}

export default App;
