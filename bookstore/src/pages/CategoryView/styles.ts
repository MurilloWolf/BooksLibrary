import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column wrap;
`;

export const FilterBar = styled.div`
	display: flex;
	flex-flow: row wrap;

	margin: 2rem 0;
	padding: 2rem;
	width: 100%;
	max-width: 1224px;
	height: 100%;

	@media screen and (max-width: 768px) {
		margin: 1rem 0;
	}
`;
