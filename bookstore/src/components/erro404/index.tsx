import React from "react";

import { Container } from "./styles";
import { Link } from "react-router-dom";
import error from "../../styles/assets/erros.svg";
const Error404: React.FC = () => {
	return (
		<Container>
			<div>
				<h1>Sorry, we didn't find the book you're looking for...</h1>
				<div>
					<Link to={"/"}>Go back to Home</Link>
				</div>
				<img src={error} alt="Pagina indisponivel" />
			</div>
		</Container>
	);
};

export default Error404;
