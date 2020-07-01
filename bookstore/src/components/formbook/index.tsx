import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import {
	Container,
	FormHeader,
	FormFooter,
	FormImageUpload,
	FormSubtitle,
	ButtonBar,
	Error,
	SelectCategory,
	UrlImage,
	Preview,
} from "./styles";
import { TextField, ComboBox, Button, TextArea } from "../form";
import { BsUpload } from "react-icons/bs";

import Musk from "../../styles/assets/elon.jpg";
import { addBook } from "../../redux/actions/book";

const Formbook: React.FC = () => {
	const noImage =
		"https://sciences.ucf.edu/psychology/wp-content/uploads/sites/63/2019/09/No-Image-Available.png";

	const dispatch = useDispatch();
	/* State */
	const [title, setTitle] = useState("");
	const [auth, setAuth] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("uncategory");
	const [image, setImage] = useState(noImage);

	/* Errors */
	const [titleError, setTitleError] = useState(false);
	const [descriptionError, setDescriptionError] = useState(false);
	const [authError, setAuthError] = useState(false);

	const id = useSelector((state: any) => {
		const sizeOfArray = state.books.length - 1;
		const autoIncrement = state.books[sizeOfArray].id + 1;

		return autoIncrement;
	});

	function handleSave(event: React.FormEvent) {
		event.preventDefault();
		const isValid = validateForm();

		if (isValid) {
			const book = {
				id,
				title,
				auth,
				description,
				category,
				date: dateFormat(),
				image,
				deleted: false,
				edited: false,
			};
			dispatch(addBook(book));
		}
	}

	function validateForm() {
		let valid = true;

		//validar o titulo
		if (title.trim().length <= 0) {
			setTitleError(true);
			valid = false;
		} else {
			setTitleError(false);
		}

		if (auth.trim().length <= 0) {
			setAuthError(true);
			valid = false;
		} else {
			setAuthError(false);
		}

		if (description.trim().length <= 0) {
			setDescriptionError(true);
			valid = false;
		} else {
			setDescriptionError(false);
		}

		return valid;
	}

	function dateFormat() {
		const date = new Date();
		const formatedDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
		return formatedDate;
	}

	function handleImage(value: string) {
		const debounceValue = debounce((value) => {
			if (value.trim() === "" || value === undefined || value === null)
				setImage(noImage);
			else setImage(value);
		}, 1000);
		debounceValue(value);
	}

	return (
		<Container>
			<form>
				<fieldset>
					<FormHeader>
						<FormSubtitle>
							<legend>
								Book{" "}
								<p title="Esse campo é preenchido automaticamente">
									{dateFormat()}
								</p>
							</legend>
						</FormSubtitle>
						<TextField
							onChange={(value) => setTitle(value)}
							name="Title"
							placeHolder="Insert Title"
							content=""
							error={titleError}
						/>
						<TextField
							onChange={(value) => setAuth(value)}
							name="Auth"
							placeHolder="Auth"
							content=""
							error={authError}
						/>
						<SelectCategory>
							<ComboBox setValue={setCategory} />
						</SelectCategory>
					</FormHeader>
					<UrlImage>
						<TextField
							onChange={(value) => handleImage(value)}
							name="Image_url"
							placeHolder="Image_url"
							content=""
							error={authError}
						/>
					</UrlImage>
					<FormImageUpload>
						<Preview>
							<img src={image} alt={title} />
						</Preview>
					</FormImageUpload>
					<FormFooter>
						<h3>Description</h3>
						<Error status={descriptionError}>
							<span>Esse campo é obrigatório</span>
						</Error>
						<TextArea
							onChange={(value) => setDescription(value)}
							content={description}
						/>
						<ButtonBar>
							<Button onClick={handleSave} type="save">
								Save
							</Button>
							<Button onClick={() => {}} type="cancel">
								Cancel
							</Button>
						</ButtonBar>
					</FormFooter>
				</fieldset>
			</form>
		</Container>
	);
};

export default Formbook;
