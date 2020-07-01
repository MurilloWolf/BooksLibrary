import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from "../actions/actionTypes";

export interface Books {
	type: string;
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

const INITIAL_STATE = [
	{
		id: 1,
		title: "Harry Potter and the sorcerer's stone",
		auth: "J.K.Rolling",
		description:
			"Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.",
		category: "want",
		date: "05/05/2020",
		image: "https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg",
		deleted: false,
	},
];

const Books = (state = INITIAL_STATE, action: Books) => {
	switch (action.type) {
		case ADD_BOOK:
			console.log(state);
			return [
				...state,
				{
					id: action.id,
					title: action.title,
					auth: action.auth,
					description: action.description,
					category: action.category,
					date: action.date,
					image: action.image,
					deleted: action.deleted,
					edited: action.edited,
				},
			];

		case EDIT_BOOK:
			return state;

		case DELETE_BOOK:
			//search id book
			const newState = state.filter((book) => {
				if (!book.deleted) {
					if (book.id === action.id) book.deleted = true;
				}

				return book;
			});

			return newState;

		default:
			return state;
	}
};

export default Books;
