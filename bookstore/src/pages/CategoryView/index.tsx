import React, { useState } from "react";

import { Container, FilterBar } from "./styles";
import ComboBox from "../../components/form/combobox";
import OrderBox from "../../components/form/orderbox";

import MainLayout from "../../components/layout/main";
import ScrollBar from "../../components/scroolBar";

const CategoryView: React.FC = () => {
	const [filter, setFilter] = useState("");
	const [order, setOrder] = useState("");

	return (
		<MainLayout>
			<Container>
				<FilterBar>
					<ComboBox setValue={setFilter} />
					<OrderBox setValue={setOrder} />
				</FilterBar>
				<ScrollBar category={filter} order={order} />
			</Container>
		</MainLayout>
	);
};

export default CategoryView;
