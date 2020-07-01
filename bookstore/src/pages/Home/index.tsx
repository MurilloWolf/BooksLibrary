import React from "react";
import { Link } from "react-router-dom";
import {
	ButtonLink,
	Section,
	Main,
	Category,
	CategoryList,
	Aside,
	Animation,
	Text,
} from "./styles";
import MainLayout from "../../components/layout/main";
import Reading1 from "../../styles/assets/reading1.svg";
import Reading2 from "../../styles/assets/reading2.svg";
import ScrollBar from "../../components/scroolBar";
import { useSelector } from "react-redux";
import { Store } from "../../@types";

const Home: React.FC = () => {
	const categorys = useSelector((state: Store) => {
		return state.categorys;
	});

	function switchColor(value: string) {
		switch (value) {
			case "uncategory":
				return "#666";

			case "want":
				return "#e6af2e";

			case "reading":
				return "#3abeff";

			case "read":
				return "#78bc61";
		}
	}

	return (
		<MainLayout>
			<Main>
				<Aside>
					<Text>
						<h1>Find a book recomendation</h1>
						<p>
							We have a lot of books recomendation and description separate by
							category, check de category or help us to catolog the books
						</p>
					</Text>
					<CategoryList>
						{categorys.map((item) => {
							return (
								<Category>
									<div style={{ backgroundColor: switchColor(item.value) }} />
									<p>{item.label}</p>
								</Category>
							);
						})}
					</CategoryList>
				</Aside>
				<Animation>
					<img src={Reading1} alt="animation 1" />
				</Animation>
			</Main>
			<Section>
				<Animation>
					<img src={Reading2} alt="animation 2" />
				</Animation>
				<Aside>
					<Text>
						<h2>Help us adding a book or commenting about a book.</h2>
					</Text>
					<ButtonLink>
						<Link to={"/editBook"}>Add a book</Link>
					</ButtonLink>
				</Aside>
			</Section>
			<Section>
				<ScrollBar category="reading" />
			</Section>
		</MainLayout>
	);
};

export default Home;
