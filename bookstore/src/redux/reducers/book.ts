import { ADD_BOOK, EDIT_BOOK } from "../actions/actionTypes";

export interface Books {
	type: string;
	id: number;
	title: string;
	description: string;
	category: string;
	date: string;
	image: string;
}

const INITIAL_STATE = [
	{
		id: 1,
		title: "Harry Potter and the sorcerer's stone",
		description:
			"Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.",
		category: "want",
		date: "05/05/2020",
		image: "no image",
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
					description: action.description,
					category: action.category,
					date: action.date,
					image: action.image,
				},
			];

		case EDIT_BOOK:
			return state;

		default:
			return state;
	}
};

export default Books;
