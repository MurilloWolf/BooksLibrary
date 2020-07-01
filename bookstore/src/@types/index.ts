export interface Store {
	books: Book[];
	categorys: Category[];
	comments: Comment[];
}

export interface Book {
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

export interface Comment {
	id: number;
	id_book: number;
	name: string;
	text: string;
}

export interface Category {
	label: string;
	value: string;
}
