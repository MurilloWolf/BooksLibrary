import styled from "styled-components";

export const Container = styled.div`
	text-decoration: none;
	margin: 2rem;
	a {
		border-radius: 5px;
		cursor: pointer;
		color: #212121;
		width: 100%;
		max-width: 485px;
		min-width: 300px;
		height: 100%;
		max-height: 285px;
		background: #eee;

		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column wrap;

		.backgroundBook {
			background: #212121;
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			img {
				width: auto;
				height: 100%;
				max-height: 162px;
			}
		}
	}

	@media screen and (max-width: 800px) {
		margin: 2rem auto;
	}
`;

export const CategoryDot = styled.div`
	margin: 5px;
	border-radius: 50%;
	height: 24px;
	width: 24px;
	background: #f1f023;
	border: none;
	-webkit-box-shadow: 2px 2px 35px 0px rgba(0, 0, 0, 0.67);
	-moz-box-shadow: 2px 2px 35px 0px rgba(0, 0, 0, 0.67);
	box-shadow: 2px 2px 35px 0px rgba(0, 0, 0, 0.67);
`;

export const Details = styled.div`
	width: 100%;
	padding: 1rem 1rem;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-flow: column wrap;

	.detailTitle {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-flow: row wrap;
		border-radius: 5px;
	}
	p {
		font-size: 16px;
	}
`;
