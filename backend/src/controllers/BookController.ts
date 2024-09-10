import BookModel from '../models/BookModel';
import {Request, Response} from 'express';
import { validateBook } from '../middlewares/validation-handler';
import { errorHandler } from '../middlewares/error-handler';
// BookController prende le richieste e le risposte, le maneggia e poi passa i dati a BookModel
// che si occuperà di fare le interrogazioni al DB.



async function getAllBooks(req: Request, res: Response): Promise<void> {
    console.log('getAllBooks called');
    console.log('res object:', Object.keys(res));

    try {
        const books = await BookModel.getAllBooks();
        res.json(books);
    } catch (error) {
        console.error('Error caught in getAllBooks:', error);
        console.log('res object before handleError:', Object.keys(res));
        errorHandler(res, error);
        //res.status(500).json({error: 'Errore nel recupero dei libri'});
    }
}

async function addBook(req: Request, res:Response): Promise<void> {
    console.log('addBook called');
    //console.log('res object:', Object.keys(res));
    console.log('res body:', req.body);

    try {
        validateBook(req.body);
        const {title, author, published_year, genre, stock} = req.body;
        const book = await BookModel.addBook(title, author, published_year, genre, stock);
        res.status(201).json(book);
    } catch (error) {
        console.error('Error caught in getAllBooks:', error);
        console.log('res object before handleError:', Object.keys(res));
        errorHandler(res, error);
        //res.status(500).json({error: "Errore nell'aggiunta del libro"});

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

// DA MIGLIORARE PERCHE' ANSWER E' UNA STRINGA MA E' MEGLIO ESSERE PIU RESTRITTIVI
async function deleteBook(req: Request, res: Response): Promise<void> {
    try {
        const id: number = parseInt(req.params.id);
        const answer = await BookModel.deleteBook(id);
        res.status(201).json(answer);
    } catch (error) {
        res.status(500).json({error: "Errore nell'eliminazione del libro"});
    }
}

export {getAllBooks, addBook, updateBook, deleteBook};