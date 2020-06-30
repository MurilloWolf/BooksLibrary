import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
`;

export const Main = styled.main`
	margin: 2rem 0;
	padding: 2rem;
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: space-evenly;
`;

export const Section = styled.section`
	margin: 2rem 0;
	padding: 2rem;
	display: flex;
	flex-flow: row wrap-reverse;
	align-items: center;
	justify-content: space-evenly;
	text-align: center;
`;

export const Text = styled.div`
	width: auto;
	max-width: 525px;
	height: auto;
`;

export const CategoryList = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const Category = styled.div`
	width: 100%;
	max-width: 190px;
	font-size: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-flow: row nowrap;
	align-self: flex-start;

	div {
		border-radius: 50%;
		height: 24px;
		width: 24px;
		background: #55f052;
		margin: 1rem 0.75rem;
	}
	p {
		color: #555 !important;
	}

	@media screen and (max-width: 725px) {
		p {
			font-size: 16px !important;
		}
		div {
			height: 16px;
			width: 16px;
		}
	}
`;

export const Aside = styled.aside`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: space-evenly;
	margin: 2rem 0;
	h1 {
		font-size: 36px;
		margin: 1rem 0;
		font-weight: normal;
	}

	h2 {
		font-size: 32px;
		margin: 1rem 0;
		font-weight: normal;
	}

	p {
		font-size: 24px;
		margin: 1rem 0;
		color: #bbb;
		font-weight: lighter;
	}

	@media screen and (max-width: 725px) {
		p {
			font-size: 16px;
		}
		h2 {
			font-size: 24px;
		}
	}
`;

export const Animation = styled.div`
	height: auto;

	img {
		max-width: 625px;
		width: 100%;
		height: auto;
	}
`;

export const Search = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: flex-start;
	align-self: flex-start;
	padding: 2rem;

	img {
		max-width: 138px;
		width: auto;
		height: auto;
	}
	div {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
	}

	@media screen and (max-width: 765px) {
		padding: 0rem 1rem;
		align-items: center;
		justify-content: space-evenly;
	}
`;

export const InputText = styled.div`
	border-bottom: 2px solid #49ed77;

	width: 100%;
	max-width: 165px;
	input[type="text"] {
		margin: 5px 0;
		box-shadow: 0 0 0 0;
		border: 0 none;
		outline: 0;
		padding: 5px 0;
		font-size: 16px;
		line-height: 1rem;
		max-width: 120px;
	}
`;

export const ButtonLink = styled.div`
	background: #f9a826;
	text-align: center;

	width: 100%;
	max-width: 120px;

	a {
		color: #fff;
		text-decoration: none;

		appearance: none;
		transition: opacity 0.2s ease;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 120px;
		height: 48px;
		border: none;

		opacity: 1;
		transition: opacity 0.2s ease;

		:hover {
			opacity: 0.8;
		}
	}
`;
