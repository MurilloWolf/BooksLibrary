import React from "react";
import Thumbnail from "../thumbnail";
import { Box } from "./styles";
import { useSelector } from "react-redux";
import { Store, Book } from "../../@types";

interface Props {
	category?: string;
	order?: string;
}

const ScrollBar: React.FC<Props> = (props) => {
	const books = useSelector((state: Store) => {
		let collection = state.books;

		if (props.category && props.category !== "") {
			collection = state.books.filter((item) => {
				return item.category === props.category;
			});
		}

		if (props.order && props.order !== "") {
			props.order === "alph"
				? collection.sort(sortByAlphabetic)
				: collection.sort(sortByDate);
		}

		return collection;
	});

	function hasBooks() {
		return books.length >= 0;
	}

	function sortByAlphabetic(bookA: Book, bookB: Book) {
		return bookA.title < bookB.title ? -1 : bookA.title > bookB.title ? 1 : 0;
	}

	function sortByDate(bookA: Book, bookB: Book) {
		return bookA.date > bookB.date ? -1 : bookA.date < bookB.date ? 1 : 0;
	}

	return (
		<Box>
			{hasBooks() &&
				books.map((book, key) => {
					return <Thumbnail key={key} book={book} />;
				})}
		</Box>
	);
};

export default ScrollBar;
