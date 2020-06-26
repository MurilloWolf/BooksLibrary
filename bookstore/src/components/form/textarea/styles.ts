import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	margin: 24px 0;
	height: 125px;
`;

export const TextArea = styled.textarea`
	height: 125px;
	width: 100%;
	/* 	width: 100%;
 */
	margin: 5px 0;
	box-shadow: 0 0 0 0;
	border: 0 none;
	outline: 0;

	font-size: 16px;
	padding: 10px;
	line-height: 1.5;
	border-radius: 5px;
	border: 1px solid #ccc;
	box-shadow: 1px 1px 1px #999;
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
