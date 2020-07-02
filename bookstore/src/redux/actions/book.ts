import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from "./actionTypes";

interface Book {
	id: number;
	title: string;
	auth: string;
	description: string;
	category: string;
	date: string;
	image: string;
	deleted: boolean;
	edited: boolean;
}

export const addBook = (book: Book) => ({
	type: ADD_BOOK,
	id: book.id,
	title: book.title,
	auth: book.auth,
	description: book.description,
	category: book.category,
	date: book.date,
	image: book.image,
	deleted: false,
	edited: book.edited,
});

export const deleteBook = (id: string) => ({
	type: DELETE_BOOK,
	id,
});

export const editBook = (book: Book) => {
	const act = {
		type: EDIT_BOOK,

		id: book.id,
		title: book.title,
		auth: book.auth,
		description: book.description,
		category: book.category,
		date: book.date,
		image: book.image,
		deleted: false,
		edited: book.edited,
	};

	return act;
};
