import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: column nowrap;

	svg {
		align-self: flex-start;
	}

	@media screen and (min-height: 768px) {
		margin: 2rem 0;
	}

	@media screen and (max-width: 441px) {
		margin: 0;
	}
`;
export const Main = styled.div`
	width: 100%;
	max-width: 625px;
	height: 100%;

	@media screen and (max-width: 441px) {
		> svg {
			display: none;
		}
	}
`;
