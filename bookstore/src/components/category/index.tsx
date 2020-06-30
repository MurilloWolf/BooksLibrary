import React from "react";

import { Box } from "./styles";

const Category: React.FC<any> = (props) => {
	function switchColor() {
		switch (props.value) {
			case "uncategory":
				return "#666";

			case "want":
				return "#e6af2e";

			case "reading":
				return "#3abeff";

			case "read":
				return "#78bc61";
		}
	}

	return (
		<Box style={{ backgroundColor: switchColor() }}>
			<p>{props.label}</p>
		</Box>
	);
};

export default Category;
