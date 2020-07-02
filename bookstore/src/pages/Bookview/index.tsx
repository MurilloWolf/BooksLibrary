import React from "react";
import { useParams } from "react-router-dom";
import { Container, Main } from "./styles";
import { useSelector } from "react-redux";
import { Store } from "../../@types";
import { TiArrowBackOutline } from "react-icons/ti";
import MainLayout from "../../components/layout/main";
import BookCard from "../../components/bookCard";
import Error404 from "../../components/erro404";

const Bookview: React.FC = () => {
	const { id } = useParams();
	const book = useSelector((state: Store) =>
		state.books.find((item) => {
			return item.id === Number(id);
		})
	);

	return (
		<MainLayout>
			{book === undefined ? (
				<Error404 />
			) : (
				<Container>
					<Main>
						<TiArrowBackOutline size={32} />
						<BookCard book={book} />
					</Main>
				</Container>
			)}
		</MainLayout>
	);
};

export default Bookview;
