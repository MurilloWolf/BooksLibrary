import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Store } from "../../@types";
import { Container, Main } from "./styles";
import { TiArrowBackOutline } from "react-icons/ti";
import MainLayout from "../../components/layout/main";
import Formbook from "../../components/formbook";
const Editbook: React.FC = () => {
	const { id } = useParams();
	const book = useSelector((state: Store) => {
		if (isEditing()) {
			const book = state.books.find((item) => {
				return item.id === Number(id);
			});
			return book;
		} else return {};
	});

	function isEditing() {
		return id === undefined ? false : true;
	}

	return (
		<MainLayout>
			<Container>
				<Main>
					{console.log(book)}
					<TiArrowBackOutline size={32} />
					<Formbook book={book} />
				</Main>
			</Container>
		</MainLayout>
	);
};

export default Editbook;
