import React, { useState } from "react";
import Select from "react-select";
import { Container } from "./styles";
import { useSelector } from "react-redux";
import { Store } from "../../../@types";
interface Options {
	setValue(title: string): void;
}

const ComboBox: React.FC<Options> = (props) => {
	const [selected, setSelected] = useState("");
	const options = useSelector((state: Store) => state.categorys);

	function handleChangeSelected(data: any) {
		const { value } = data;
		setSelected(value);
		props.setValue(value);
	}

	return (
		<Container>
			<Select options={options} onChange={(data) => handleChangeSelected(data)}>
				{options.map((item, key) => (
					<option key={key} value={item.value}>
						{item.label}
					</option>
				))}
			</Select>
		</Container>
	);
};

export default ComboBox;
