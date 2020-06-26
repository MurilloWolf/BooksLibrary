import React, { useState } from "react";
import Select from "react-select";
import { Container } from "./styles";

interface Options {
	value: string;
	label: string;
}

const ComboBox: React.FC = () => {
	const [selected, setSelected] = useState("");

	const options = [
		{ value: "uncategory", label: "Uncategory" },
		{ value: "want", label: "Want to Read" },
		{ value: "reading", label: "Reading" },
		{ value: "read", label: "Read" },
	];

	function handleChangeSelected(data: any) {
		console.log(data);
		const { value } = data;
		setSelected(value);
		console.log(selected);
	}

	return (
		<Container>
			<Select options={options} onChange={(data) => handleChangeSelected(data)}>
				<option value="uncategory">Uncategory</option>
				<option value="want">Want to Read</option>
				<option value="reading">Reading</option>
				<option value="read">Read</option>
			</Select>
		</Container>
	);
};

export default ComboBox;
