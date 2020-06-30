import React from "react";
import Select from "react-select";
import { Container } from "./styles";
import { BsFilterLeft } from "react-icons/bs";
const Filter: React.FC = () => {
	return (
		<Container>
			<div>
				<BsFilterLeft size={24} />
			</div>
			<div>
				{/*        <Select options={options} onChange={(data) => handleChangeSelected(data)}>
				{options.map((item, key) => (
					<option key={key} value={item.value}>
						{item.label}
					</option>
				))}
			</Select> */}
			</div>
		</Container>
	);
};

export default Filter;
