/* eslint-disable @typescript-eslint/no-unused-vars */
//import React from "react";
//import BookItem from "./components/BookItem";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Book } from "./types";

import BookList from "./components/BookList";
import ResearchForm, { SearchParams } from "./components/ResearchForm"; // ?
import LoginForm from "./components/LoginForm";
import AddBookForm from "./components/AddBookForm";

function App() {
  const [books, setBooks] = useState<Book[]>([]); // Variabile di stato inizializzata come array vuoto
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAddBookForm, setShowAddBookForm] = useState(false); // Nuovo stato

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Il token all'avvio è: ", token);

    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchBooks();
    } else {
      setBooks([]);
      setFilteredBooks([]);
    }
  }, [isAuthenticated]); // This effect runs when isAuthenticated changes

  const handleLoginSuccess = (token: string) => {
    setIsAuthenticated(true);
    localStorage.setItem("token", token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setBooks([]);
    setFilteredBooks([]);
  };

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/books/");
      setBooks(response.data);
      setFilteredBooks(response.data);
    } catch (error) {
      console.error("Error fetching books: ", error);
      setBooks([]);
      setFilteredBooks([]);
    }
  };

  // Prende un parametro params di tipo SearchParams
  const filterBooks = (params: SearchParams) => {
    const filtered = books.filter((book) => {
      return (
        (!params.title ||
          book.title.toLowerCase().includes(params.title.toLowerCase())) &&
        (!params.author ||
          book.author.toLowerCase().includes(params.author.toLowerCase()))
      );
    });
    setFilteredBooks(filtered);
  };

  const handleDeleteBook = async (id: number) => {
    if (window.confirm("Sei sicuro di voler eliminare questo libro?")) {
      try {
        await axios.delete(`http://localhost:5000/books/${id}`);
        setBooks(books.filter((book) => book.id !== id));
        setFilteredBooks(filteredBooks.filter((book) => book.id !== id));
        alert("Libro eliminato con successo");
      } catch (error) {
        console.error("Errore nell'eliminazione del libro:", error);
        alert("Errore nell'eliminazione del libro");
      }
    }
  };

  const handleAddBook = async (newBook: Omit<Book, "id">) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/books/",
        newBook
      );
      const addedBook = response.data;
      setBooks([...books, addedBook]);
      setFilteredBooks([...filteredBooks, addedBook]);
      setShowAddBookForm(false); // Nascondi il form dopo l'aggiunta
    } catch (error) {
      console.error("Errore nell'aggiunta del libro:", error);
      alert("Errore nell'aggiunta del libro");
    }
  };

  return (
    <div className="App">
      <h1> Elenco libri </h1>
      {!isAuthenticated ? (
        <LoginForm onLoginSuccess={handleLoginSuccess}></LoginForm>
      ) : (
        <>
          <button onClick={handleLogout} className="btn btn-danger mb-3">
            Logout
          </button>

          <ResearchForm onSearch={filterBooks} />

          <button
            onClick={() => setShowAddBookForm(!showAddBookForm)}
            className="btn btn-primary mb-3"
          >
            {showAddBookForm ? "Nascondi form" : "Aggiungi libro"}
          </button>

          {showAddBookForm && <AddBookForm handleAddBook={handleAddBook} />}

          <BookList
            books={filteredBooks}
            isAuthenticated={isAuthenticated}
            handleDelete={handleDeleteBook}
          />
        </>
      )}
    </div>
  );
}

export default App;
