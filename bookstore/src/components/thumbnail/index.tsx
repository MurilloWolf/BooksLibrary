import React from "react";
import { Link } from "react-router-dom";
import { Container, CategoryDot, Details } from "./styles";

const Thumbnail: React.FC<any> = (props) => {
	const { book } = props;
	return (
		<Container>
			<Link to={`/bookview/${book?.id}`}>
				<div className={"backgroundBook"}>
					<img src={book.image} alt="book" />
				</div>
				<Details>
					<div className={"detailTitle"}>
						<CategoryDot />
						<h4>{book?.title}</h4>
					</div>
					<p>Created: {book?.date}</p>
				</Details>
			</Link>
		</Container>
	);
};

export default Thumbnail;
