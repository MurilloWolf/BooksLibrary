import React, { ReactNode, useState } from "react";

import { Container, Error, TextArea as Textarea } from "./styles";

interface Props {
	children?: ReactNode;
	content: string;
	placeHolder?: string;

	onChange(value: string): void;
	error?: boolean;
}

const TextArea: React.FC<Props> = (props) => {
	const [text, setText] = useState(props.content);
	const [error, setError] = useState(props.error);

	function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
		const value = event.target.value;

		/* 		validateInput(value);
		 */ setText(value);
		props.onChange(value);
	}

	function validateInput(value: string) {
		if (value.trim().length <= 0) {
			setError(true);
		} else {
			setError(false);
		}
	}

	return (
		<Container>
			<Textarea onChange={handleChange} value={text} required />
			{/* <label>{props.name}</label> */}
			<Error status={props.error}>
				<p>Esse campo é obrigatório</p>
			</Error>
		</Container>
	);
};

export default TextArea;
