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
		edited: false,
	},
	{
		auth: "J.K.Rolling",
		category: "read",
		date: "4/6/2020",
		deleted: false,
		description:
			"Harry Potter and the Goblet of Fire is a fantasy book written by British author J. K. Rowling and the fourth novel in the Harry Potter series. It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry, and the mystery surrounding the entry of Harry's name into the Triwizard Tournament, in which he is forced to compete.↵↵The book was published in the United Kingdom by Bloomsbury and in the United States by Scholastic. In both countries, the release date was 8 July 2000. This was the first time a book in the series was published in both countries at the same time",
		edited: true,
		id: 2,
		image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD",
		title: "Harry Potter and the Goblet of Fire",
	},
	{
		auth: "J.K.Rolling",
		category: "want",
		date: "4/6/2020",
		deleted: false,
		description:
			"Harry Potter and the Half-Blood Prince is a fantasy novel written by British author J.K. Rowling and the sixth and penultimate novel in the Harry Potter series. Set during Harry Potter's sixth year at Hogwarts, the novel explores the past of Harry's nemesis, Lord Voldemort, and Harry's preparations for the final battle against Voldemort alongside his headmaster and mentor Albus Dumbledore.",
		edited: true,
		id: 4,
		image: "https://m.media-amazon.com/images/I/51myHyjJsyL.jpg",
		title: "Harry Potter and the Half-Blood Prince",
	},
	{
		auth: "J.K.Rolling",
		category: "uncategory",
		date: "4/6/2020",
		deleted: false,
		description:
			"Harry Potter and the Order of the Phoenix is a fantasy novel written by British author J. K. Rowling and the fifth novel in the Harry Potter series. It follows Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic. The novel was published on 21 June 2003 by Bloomsbury in the United Kingdom, Scholastic in the United States, and Raincoast in Canada. It sold five million copies in the first 24 hours of publication.[1] It is the longest book of the series.",
		edited: true,
		id: 6,
		image: "https://m.media-amazon.com/images/I/51-SI2+aQ2L.jpg",
		title: "Harry Potter and the Order of the Phoenix",
	},
	{
		auth: "J.K.Rolling",
		category: "read",
		date: "3/6/2020",
		deleted: false,
		description:
			"The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the Chamber of Secrets has been opened and that the heir of Slytherin would kill all pupils who do not come from all-magical families.",
		edited: true,
		id: 3,
		image: "https://m.media-amazon.com/images/I/51TA3VfN8RL.jpg",
		title: "Harry Potter and the Chamber of Secrets",
	},
	{
		auth: "J.K.Rolling",
		category: "read",
		date: "3/6/2020",
		deleted: false,
		description:
			"The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban, the wizard prison, believed to be one of Lord Voldemort's old allies.",
		edited: true,
		id: 9,
		image:
			"https://kbimages1-a.akamaihd.net/be00a641-64ad-4f99-ad3f-5ecf872c904c/1200/1200/False/harry-potter-and-the-prisoner-of-azkaban-5.jpg",
		title: "Harry Potter and the Prisoner of Azkaban",
	},
];

const Books = (state = INITIAL_STATE, action: Books) => {
	switch (action.type) {
		case ADD_BOOK:
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
			const newBook = {
				id: action.id,
				title: action.title,
				auth: action.auth,
				description: action.description,
				category: action.category,
				date: action.date,
				image: action.image,
				deleted: action.deleted,
				edited: action.edited,
			};
			console.log(newBook.id);
			const filteredState = state.filter((item) => item.id !== newBook.id);
			console.log(filteredState);
			return [...filteredState, newBook];

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
