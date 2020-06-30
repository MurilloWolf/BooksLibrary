import styled from "styled-components";

export const Container = styled.div`
	-webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.67);
	-moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.67);
	box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.67);

	animation-name: fade;
	animation-duration: 0.5s;

	h3 {
		font-weight: lighter;
	}
	@keyframes fade {
		from {
			opacity: 0;
			transform: scale(0.8);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	form {
		fieldset {
			border: none;
		}
	}
`;
export const FormHeader = styled.div`
	padding: 2rem;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-flow: column nowrap;
	flex: 1;
`;
export const FormTitle = styled.h2`
	display: flex;
	justify-content: space-around;
	align-items: center;

	font-size: 24px;
	color: #121212;
`;
export const FormSubtitle = styled.div`
	/* 	width: 100%;
	margin: 1rem 0;
	display: flex;
	justify-content: flex-end;
	flex-flow: row wrap;
	flex: 1; */
	margin: 1rem 0 0 0;
	p {
		color: #c4c4c4;
		font-size: 1rem;
		margin: 0;
	}
`;
export const FormImageUpload = styled.div`
	width: auto;
	margin: 2rem;
	height: 320px;
	max-height: 425px;
	background: #f3f3f3;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px dashed #c4c4c4;
	cursor: pointer;

	span {
		width: 170px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	img {
		width: auto;
		height: auto;
		max-height: 350px;
		display: none;
	}
`;
export const FormFooter = styled.div`
	padding: 2rem;

	p {
		padding: 1rem;
	}
`;

export const InputText = styled.div`
	width: 100%;
	border-bottom: 2px solid #212121;
	input[type="text"] {
		width: 100%;

		margin: 5px 0;
		box-shadow: 0 0 0 0;
		border: 0 none;
		outline: 0;
		padding: 5px 0;
		font-size: 16px;
		line-height: 1rem;
	}
`;

export const ComboBox = styled.div`
	width: 100%;
	select {
		width: 100%;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		flex: 1;
		background: #f0f0f5;
		border-radius: 8px;
		border: 0;
		padding: 16px 24px;
		font-size: 16px;
		color: #6c6c80;
		margin: 0 0 0 8px;
	}
`;

export const ButtonBar = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 1rem 0;
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

export const SelectCategory = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: center;

	@media screen and(max-width: 768px) {
		flex-flow: column wrap;
		align-items: flex-start;
	}
`;
