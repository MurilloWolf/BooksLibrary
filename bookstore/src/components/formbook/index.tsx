import React, { useState, ReactEventHandler, ReactHTML } from "react";
import Category from "../category";
import Comments from "../comments";
import {
	Container,
	FormCategory,
	FormDate,
	FormHeader,
	FormFooter,
	FormImageUpload,
	FormStatus,
	FormSubtitle,
	FormTitle,
	InputText,
	ButtonBar,
	Error,
} from "./styles";
import { TextField, ComboBox, Button, TextArea } from "../form";

import { BsUpload } from "react-icons/bs";
import { FiSave } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import Musk from "../../styles/assets/elon.jpg";
const Formbook: React.FC = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const [titleError, setTitleError] = useState(false);
	const [descriptionError, setDescriptionError] = useState(false);

	function handleSave(event: React.FormEvent) {
		event.preventDefault();
		const isValid = validateForm();
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

		console.log(`Title: ${title}; Description: ${description}`);
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
							<ComboBox />
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
