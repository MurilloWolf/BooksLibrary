import { combineReducers } from "redux";
import bookReducer from "./book";
import categoryReducer from "./category";
import commentReducer from "./comment";

const reducers = combineReducers({
	books: bookReducer,
	comments: commentReducer,
	categorys: categoryReducer,
});

export default reducers;
