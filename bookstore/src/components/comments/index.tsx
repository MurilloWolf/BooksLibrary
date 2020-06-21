import React from "react";
import { Container, Box } from "./styles";
import { RiArrowDownSLine } from "react-icons/ri";
const Comments: React.FC = () => {
	return (
		<Container>
			<Box>
				<h4>Comments</h4>
				<RiArrowDownSLine size={24} />
			</Box>
		</Container>
	);
};

export default Comments;
