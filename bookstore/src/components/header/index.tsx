import React from "react";

import { Header as StyledHeader } from "./styles";

const Header: React.FC = () => {
	return (
		<StyledHeader>
			<h2>
				<span>Book</span>Store
			</h2>
		</StyledHeader>
	);
};

export default Header;
