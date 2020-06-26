import React, { ReactNode, useState } from "react";

import { Container, Error } from "./styles";

interface Props {
	children?: ReactNode;
	content: string;
	placeHolder?: string;
	name: string;
	onChange(value: string): void;
	error?: boolean;
}

const TextField: React.FC<Props> = (props) => {
	const [text, setText] = useState(props.content);
	const [error, setError] = useState(props.error);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
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
			<div>
				<input type="text" onChange={handleChange} value={text} required />
				<label>{props.name}</label>
				<Error status={props.error}>
					<p>Esse campo é obrigatório</p>
				</Error>
			</div>
		</Container>
	);
};

export default TextField;
