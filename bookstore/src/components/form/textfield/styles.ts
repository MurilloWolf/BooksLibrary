import styled from "styled-components";

export const Container = styled.div`
	margin: 24px 0;
	width: 100%;
	div {
		position: relative;
		input[type="text"] {
			font-size: 1rem;
			padding: 1rem 0;
			appearance: none;
			border: none;
			border-bottom: 2px solid #444;
			background-color: transparent;
			outline: none;
			width: 100%;
		}
		label {
			position: absolute;
			top: 1rem;
			left: 0;
			transition: 0.4s;
			color: #211211;
		}

		input[type="text"]:focus ~ label,
		input[type="text"]:valid ~ label {
			transform: translateY(-24px);
			font-size: 0.8rem;
			letter-spacing: 0.1rem;
		}
	}
`;

interface ErrorProps {
	status?: boolean;
}

export const Error = styled.div<ErrorProps>`
	display: ${(props) => (props.status ? "block" : "none")};

	width: 100%;
	height: 32px;
	margin: 5px 0;
	padding: 5px 5px;
	background: #e45866;
	color: #fff;
`;
