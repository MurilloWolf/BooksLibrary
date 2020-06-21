import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	min-height: 100px;
`;

export const Box = styled.div`
	width: 100%;
	max-width: 520px;
	min-height: 48px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background: #f5f5f5;
	svg {
		align-self: flex-end;
		cursor: pointer;
	}
	-webkit-box-shadow: 5px 5px 18px -7px rgba(0, 0, 0, 0.67);
	-moz-box-shadow: 5px 5px 18px -7px rgba(0, 0, 0, 0.67);
	box-shadow: 5px 5px 18px -7px rgba(0, 0, 0, 0.67);
`;
