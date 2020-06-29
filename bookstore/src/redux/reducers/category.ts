import Redux from "redux";

const INITIAL_STATE = [
	{ value: "uncategory", label: "Uncategory" },
	{ value: "want", label: "Want to Read" },
	{ value: "reading", label: "Reading" },
	{ value: "read", label: "Read" },
];

const Category = (state = INITIAL_STATE, action: Redux.Action) => {
	return state;
};

export default Category;
