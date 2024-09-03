import { QueryResult } from 'pg';
import pool from '../config/database';

interface BookItem {
    id: number,
    title: string,
    author: string,
    published_year: number,
    genre: string,
    stock: number
}

class Book {

    static async getAllBooks(): Promise<BookItem[]> {
        const query = 'SELECT * FROM books';
        const result: QueryResult<BookItem> = await pool.query(query);
        return result.rows;
    }

    static async addBook(title: string, author?: string, published_year?: number, genre?: string, stock:number = 0): Promise<BookItem> {
        const fields: string[] = ['title', 'stock'];
        const values: any[] = [title, stock];
      
        if (author) {
          fields.push('author');
          values.push(author);
        }
        if (published_year) {
          fields.push('published_year');
          values.push(published_year);
        }
        if (genre) {
          fields.push('genre');
          values.push(genre);
        }
      
        const placeholders = values.map((_, index) => `$${index + 1}`).join(', ');
        const query = `INSERT INTO books (${fields.join(', ')}) VALUES (${placeholders}) RETURNING *`;
      
        const result: QueryResult<BookItem> = await pool.query(query, values);
        return result.rows[0];
    } 

    static async updateBook(id:number, title: string, author: string, published_year: number, genre: string, stock: number): Promise<BookItem> {
        const query = 'UPDATE books SET title = $2 author = $3 published_year = $4 genre = $5 stock=$6 WHERE id = $1 RETURNING *';
        const result: QueryResult<BookItem> = await pool.query(query);
        return result.rows[0];
    }

    // DA MIGLIORARE PERCHE' SAREBBE MEGLIO NON FARE IL RETURN DELLE STRINGHE
    static async deleteBook(id:number): Promise<string> {
        const query = 'DELETE FROM books WHERE id = $1';
        try {
            const result = await pool.query(query, [id]);
            if (result.rowCount != null && result.rowCount > 0) {
                return "Eliminazione del libro avvenuta con successo";
            } else {
                return "Eliminazione del libro non riuscita";
            }
        } catch (error) {
            console.log("Errore durante l'eliminazione del libro: " , error);
            return "Eliminazione fallita";
        }
    }
}

export default Book;