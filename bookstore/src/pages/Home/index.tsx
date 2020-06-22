import React from "react";

import {
	Container,
	Main,
	Category,
	CategoryList,
	Aside,
	Animation,
	Text,
	Search,
	InputText,
} from "./styles";
import { BsSearch } from "react-icons/bs";
import MainLayout from "../../components/layout/main";
import Reading1 from "../../styles/assets/reading1.svg";
import BookIcon from "../../styles/assets/book.png";

const Home: React.FC = () => {
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
						<Category>
							<div />
							<p>Want to Read</p>
						</Category>
						<Category>
							<div />
							<p>Reading</p>
						</Category>
						<Category>
							<div />
							<p>Read</p>
						</Category>
						<Category>
							<div />
							<p>UnCategory</p>
						</Category>
					</CategoryList>
				</Aside>
				<Animation>
					<img src={Reading1} />
				</Animation>
			</Main>
			<Search>
				<img src={BookIcon} />
				<div>
					<InputText>
						<BsSearch size={16} />
						<input type="text" placeholder="Search a Book" />
					</InputText>
				</div>
			</Search>
		</MainLayout>
	);
};

export default Home;
