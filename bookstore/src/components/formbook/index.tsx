import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	Container,
	FormHeader,
	FormFooter,
	FormImageUpload,
	FormSubtitle,
	ButtonBar,
	Error,
	SelectCategory,
} from "./styles";
import { TextField, ComboBox, Button, TextArea } from "../form";
import { BsUpload } from "react-icons/bs";

import Musk from "../../styles/assets/elon.jpg";
import { addBook } from "../../redux/actions/book";

const Formbook: React.FC = () => {
	const dispatch = useDispatch();
	/* State */
	const [title, setTitle] = useState("");
	const [auth, setAuth] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("uncategory");

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
				image: "no image",
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
							name="Title"
							placeHolder="Auth"
							content=""
							error={authError}
						/>
						<SelectCategory>
							<ComboBox setValue={setCategory} />
						</SelectCategory>
					</FormHeader>
					<FormImageUpload>
						<span>
							<BsUpload size={32} color="#212121" />
							<p>Upload the image</p>
						</span>
						<div>
							<img src={Musk} alt="elon musk" />
						</div>
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
