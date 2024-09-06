export interface Book {
    id: number;
    title: string;
    author: string;
    published_year: number;
    genre: string;
    stock: number;
}

export interface SearchParams {
    title?: string;
    author?: string;
  }