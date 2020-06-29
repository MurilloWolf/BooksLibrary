import Redux from "redux";
import {
	ADD_COMMENT,
	EDIT_COMMENT,
	DELETE_COMMENT,
} from "../actions/actionTypes";

const INITIAL_STATE = [
	{
		id: 1,
		id_book: 1,
		name: "Murillo Wolf",
		text: "Great book.",
	},
];

const Comment = (state = INITIAL_STATE, action: Redux.Action) => {
	switch (action.type) {
		case ADD_COMMENT:
			return state;

		case EDIT_COMMENT:
			return state;

		case DELETE_COMMENT:
			return state;

		default:
			return state;
	}
};

export default Comment;
