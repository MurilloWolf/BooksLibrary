import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 2rem;
	h1 {
		color: #888;
		font-weight: lighter;
		font-size: 32px;
		margin: 1rem 0;
	}
	div {
		width: 100%;
		max-width: 768px;
		height: auto;

		img {
			width: 100%;
			height: auto;
		}
	}

	div {
		margin: 2rem 0;
		a {
			text-decoration: underline;
			color: #999;
			font-size: 24px;
			opacity: 1;
			transition: all 0.2s ease-in-out;

			:hover {
				opacity: 0.8;
			}
		}
	}
`;
