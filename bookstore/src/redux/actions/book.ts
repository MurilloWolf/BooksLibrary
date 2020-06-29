import { ADD_BOOK } from "./actionTypes";

interface Book {
	id: number;
	title: string;
	description: string;
	category: string;
	date: string;
	image: string;
}

export const addBook = (book: Book) => ({
	type: ADD_BOOK,
	id: book.id,
	title: book.title,
	description: book.description,
	category: book.category,
	date: book.date,
	image: book.image,
});
