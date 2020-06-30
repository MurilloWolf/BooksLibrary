import React from "react";
import { Link } from "react-router-dom";
import { Header as StyledHeader } from "./styles";

const Header: React.FC = () => {
	return (
		<StyledHeader>
			<h2>
				<Link to={"/"}>
					<span>Book</span>Store
				</Link>
			</h2>
		</StyledHeader>
	);
};

export default Header;
