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
`;

export const MainModal = styled.div`
	padding: 2rem;
	position: fixed;
	background: white;
	width: 30%;
	height: 250px;
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
		justify-content: space-between;
		width: 80%;
	}
`;
