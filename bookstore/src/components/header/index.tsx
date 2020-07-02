import React from "react";
import { Link } from "react-router-dom";
import { Header as StyledHeader, NavLink } from "./styles";

const Header: React.FC = () => {
	return (
		<StyledHeader>
			<div>
				<h2>
					<Link to={"/"}>
						<span>Book</span>Store
					</Link>
				</h2>
			</div>
			<nav>
				<NavLink>
					<Link to={"/categoryView"}>Find Books</Link>
				</NavLink>
				<NavLink>
					<Link to={"/editBook"}>Add a Book</Link>
				</NavLink>
			</nav>
		</StyledHeader>
	);
};

export default Header;
