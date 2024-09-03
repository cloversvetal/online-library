import express from 'express';
import {Router} from 'express';
import {Request, Response} from 'express';
import * as bookController from '../controllers/BookController';

const router: Router = express.Router();

router.get('/', (req: Request, res:Response) => {
    bookController.getAllBooks(req,res);
});

router.post('/', (req: Request, res:Response) => {
    bookController.addBook(req,res);
});

router.put('/:id', (req: Request, res:Response) => {
    bookController.updateBook(req,res);
});

export default router;