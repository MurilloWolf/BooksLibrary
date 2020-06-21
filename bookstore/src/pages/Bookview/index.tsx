import React from "react";

import { Container, Main } from "./styles";
import { TiArrowBackOutline } from "react-icons/ti";
import MainLayout from "../../components/layout/main";
import BookCard from "../../components/bookCard";
const Bookview: React.FC = () => {
	return (
		<MainLayout>
			<Container>
				<Main>
					<TiArrowBackOutline size={32} />
					<BookCard />
				</Main>
			</Container>
		</MainLayout>
	);
};

export default Bookview;
