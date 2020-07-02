import styled from "styled-components";

interface Props {
	show?: boolean;
}

export const Container = styled.div<Props>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	font-size: 24px;
	display: ${(props) => (props.show ? "block" : "none")};

	img {
		margin: 0 0 2rem -16px;
		width: 300px;
		height: auto;
	}

	h3 {
		font-weight: bold;
	}
	p {
		font-weight: normal;
	}
`;

export const MainModal = styled.div`
	padding: 2rem;
	position: fixed;
	background: white;
	width: max-content;
	min-width: 350px;
	margin: 0;

	height: auto;
	max-height: 500px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 25px;

	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-flow: column nowrap;

	div {
		display: flex;
		justify-content: center;
		width: 80%;

		ul {
			text-align: center;
			list-style: none;
			li {
				margin: 1rem 0;
				a {
					text-decoration: none;
					color: #aaa;
				}
			}
		}
	}
	@media screen and(min-width: 768px) {
		div {
			width: 250px;
		}
	}
`;
