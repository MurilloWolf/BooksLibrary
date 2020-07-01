import React, { useState } from "react";

import { Container, StyledSelect } from "./styles";
import { useSelector } from "react-redux";
import { Store } from "../../../@types";
interface Options {
	setValue(title: string): void;
}

const OrderBox: React.FC<Options> = (props) => {
	const [selected, setSelected] = useState("");

	const options = [
		{
			label: "alphabetic",
			value: "alph",
		},
		{
			label: "date",
			value: "date",
		},
	];

	function handleChangeSelected(data: any) {
		const { value } = data;
		setSelected(value);
		props.setValue(value);
	}

	return (
		<Container>
			<p>Order By</p>
			<StyledSelect
				options={options}
				onChange={(data: any) => handleChangeSelected(data)}
			>
				<option value={"alph"}>alphabetic</option>
				<option value={"date"}>date of create/edit</option>
			</StyledSelect>
		</Container>
	);
};

export default OrderBox;
