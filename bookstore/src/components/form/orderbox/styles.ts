import styled from "styled-components";
import Select from "react-select";
export const Container = styled.div`
	margin: 0;
	width: 250px;
	p {
		margin: 5px 0;
	}
`;

export const StyledSelect = styled(Select)`
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	flex: 1;

	width: 200px;
`;
