import BookModel from '../models/BookModel';
import {Request, Response} from 'express';
// BookController prende le richieste e le risposte, le maneggia e poi passa i dati a BookModel
// che si occuperà di fare le interrogazioni al DB.

async function getAllBooks(req: Request, res: Response): Promise<void> {
    try {
        const books = await BookModel.getAllBooks();
        res.json(books);
    } catch (error) {
        console.error("Errore dettagliato:", error);
        res.status(500).json({error: 'Errore nel recupero dei libri'});
    }
}

async function addBook(req: Request, res:Response): Promise<void> {
    try {
        const {title, author, published_year, genre, stock} = req.body;
        const book = await BookModel.addBook(title, author, published_year, genre, stock);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({error: "Errore nell'aggiunta del libro"});
        console.log("Errore aggiunta libro: ", error);
    }
} 

async function updateBook(req: Request, res:Response): Promise<void> {
    try {
        const id: number = parseInt(req.params.id);
        const {title, author, published_year, genre, stock} = req.body;
        const book = await BookModel.updateBook(id, title, author, published_year, genre, stock);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({error: "Errore nella modifica del libro"});
    }
} 

export {getAllBooks, addBook, updateBook};