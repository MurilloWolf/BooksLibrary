import React from "react";
import Category from "../category";
import Comments from "../comments";
import {
	Container,
	BookCategory,
	BookDate,
	BookHeader,
	BookFooter,
	BookBody,
	BookStatus,
	BookSubtitle,
	BookTitle,
} from "./styles";
import Musk from "../../styles/assets/elon.jpg";
const BookCard: React.FC = () => {
	return (
		<Container>
			<BookHeader>
				<BookTitle>Elon Musk - O empresário que antecipa o futuro</BookTitle>
				<BookSubtitle>
					<Category />
					<p>
						<span>Edited:</span> 05/06/2020
					</p>
				</BookSubtitle>
			</BookHeader>
			<BookBody>
				<div>
					<img src={Musk} />
				</div>
			</BookBody>
			<BookFooter>
				<h3>Description</h3>
				<p>
					Is simply dummy text of the printing and typesetting industry. Lorem
					Ipsum has been the industry's standard dummy text ever since the
					1500s, when an unknown printer took a galley of type and scrambled it
					to make a type specimen book. It has survived not only five centuries,
					but also the leap into electronic typesetting , remaining essentially
					unchanged. It was popularised in the 1960s with the release of
					Letraset sheets containing Lorem Ipsum passages, and more recently
					with desktop publishing software like Aldus PageMaker including
					versions of Lorem Ipsum
				</p>
			</BookFooter>
			<Comments />
		</Container>
	);
};

export default BookCard;
