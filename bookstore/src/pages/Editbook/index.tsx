import React from "react";

import { Container, Main } from "./styles";
import { TiArrowBackOutline } from "react-icons/ti";
import MainLayout from "../../components/layout/main";
import Formbook from "../../components/formbook";
const Editbook: React.FC = () => {
	return (
		<MainLayout>
			<Container>
				<Main>
					<TiArrowBackOutline size={32} />
					<Formbook />
				</Main>
			</Container>
		</MainLayout>
	);
};

export default Editbook;
