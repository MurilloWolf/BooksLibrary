import styled from "styled-components";

export const Container = styled.div`
	-webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.67);
	-moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.67);
	box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.67);
`;
export const BookHeader = styled.div`
	padding: 2rem;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-flow: column nowrap;
	flex: 1;
`;
export const BookTitle = styled.h2`
	display: flex;
	justify-content: space-around;
	align-items: center;

	font-size: 24px;
	color: #121212;
`;
export const BookSubtitle = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex: 1;
	p {
		color: #c4c4c4;
		font-size: 1rem;
		margin: 1rem 0;
	}
`;
export const BookBody = styled.div`
	width: 100%;
	height: 100%;
	max-height: 425px;
	background: #1f1a1a;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: auto;
		height: auto;
		max-height: 350px;
	}
`;
export const BookFooter = styled.div`
	padding: 2rem;

	p {
		padding: 1rem;
	}
`;

export const BookCategory = styled.div``;
export const BookStatus = styled.div``;
export const BookDate = styled.div``;
