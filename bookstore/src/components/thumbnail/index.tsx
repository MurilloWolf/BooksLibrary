import React from "react";
import { Link } from "react-router-dom";
import { Container, CategoryDot, Details } from "./styles";
import imagem from "../../styles/assets/elon.jpg";
const Thumbnail: React.FC = () => {
	return (
		<Container>
			<Link to="/bookview/2">
				<div className={"backgroundBook"}>
					<img src={imagem} alt="book" />
				</div>
				<Details>
					<div className={"detailTitle"}>
						<CategoryDot />
						<h4>Titulo do livro </h4>
					</div>
					<p>Created: 05/05/2020</p>
				</Details>
			</Link>
		</Container>
	);
};

export default Thumbnail;
