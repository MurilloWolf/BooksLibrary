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
} from "./styles";
import { TextField, ComboBox, Button, TextArea } from "../form";
import { BsUpload } from "react-icons/bs";

import Musk from "../../styles/assets/elon.jpg";
import { addBook } from "../../redux/actions/book";

const Formbook: React.FC = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("uncategory");
	const [titleError, setTitleError] = useState(false);
	const [descriptionError, setDescriptionError] = useState(false);
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
				description,
				category,
				date: "20/05/20",
				image: "no image",
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

		if (description.trim().length <= 0) {
			setDescriptionError(true);
			valid = false;
		} else {
			setDescriptionError(false);
		}

		return valid;
	}

	return (
		<Container>
			<form>
				<fieldset>
					<FormHeader>
						<legend>Book</legend>
						<TextField
							onChange={(value) => setTitle(value)}
							name="Title"
							placeHolder="Insert Title"
							content=""
							error={titleError}
						/>
						<div>
							<ComboBox setValue={setCategory} />
							<FormSubtitle>
								<p title="Esse campo é preenchido automaticamente">
									Edited: 05/06/2020
								</p>
							</FormSubtitle>
						</div>
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
