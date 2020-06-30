import React from "react";
import { useSelector } from "react-redux";
import Category from "../category";
import Comments from "../comments";
import { Store } from "../../@types";
import {
	Container,
	BookHeader,
	BookFooter,
	BookBody,
	BookSubtitle,
	BookTitle,
} from "./styles";
import Musk from "../../styles/assets/elon.jpg";

interface Props {
	book: {
		id: number;
		title: string;
		description: string;
		category: string;
		date: string;
		image: string;
		deleted: boolean;
	};
}
const BookCard: React.FC<Props | any> = (props) => {
	const [label, value] = useSelector((state: Store) => {
		const value = state.books.find((item) => item === props.book)?.category;
		const label = state.categorys.find((item) => item.value === value)?.label;
		return [label, value];
	});

	return (
		<Container>
			<BookHeader>
				<BookTitle>{props.book.title}</BookTitle>
				<BookSubtitle>
					{console.log(value)}
					<Category label={label} value={value} />
					<p>
						<span>Edited:</span> 05/06/2020
					</p>
				</BookSubtitle>
			</BookHeader>
			<BookBody>
				<div>
					<img src={Musk} alt={props.book.title} />
				</div>
			</BookBody>
			<BookFooter>
				<h3>Description</h3>
				<p>{props.book.description}</p>
			</BookFooter>
			<Comments />
		</Container>
	);
};

export default BookCard;
