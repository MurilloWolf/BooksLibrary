import React, { useState, useEffect } from "react";
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
import { Book } from "../../@types";
import { addBook, editBook } from "../../redux/actions/book";

interface Props {
	book?: any;
}

const Formbook: React.FC<Props> = (props) => {
	const noImage =
		"https://conectaibrasil.com.br/Assets/Images/New/no-image-02.png";

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

	function handleEdit(event: React.FormEvent) {
		const isValid = validateForm();

		event.preventDefault();
		if (isValid) {
			const book = {
				id: props.book.id,
				title,
				auth,
				description,
				category,
				date: dateFormat(),
				image,
				deleted: false,
				edited: true,
			};
			dispatch(editBook(book));
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

	function isEditing() {
		return props?.book !== {};
	}

	function loadInfo() {
		if (isEditing()) {
			const { book } = props;
			console.log("Load");
			console.log(book);
			setImage(book.image);
			setTitle(book.title);
			setDescription(book.description);
			setAuth(book.auth);
		}
	}

	useEffect(loadInfo, []);

	return (
		<Container>
			<form>
				<fieldset>
					<FormHeader>
						<FormSubtitle>
							<legend>
								Book
								<p title="Esse campo é preenchido automaticamente">
									{dateFormat()}
								</p>
							</legend>
						</FormSubtitle>
						<TextField
							onChange={(value) => setTitle(value)}
							name="Title"
							placeHolder="Insert Title"
							content={isEditing() ? props.book.title : ""}
							error={titleError}
						/>
						<TextField
							onChange={(value) => setAuth(value)}
							name="Auth"
							placeHolder="Auth"
							content={isEditing() ? props.book.auth : ""}
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
							content={image}
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
							content={isEditing() ? props.book.description : ""}
						/>
						<ButtonBar>
							<Button
								onClick={isEditing() ? handleEdit : handleSave}
								type="save"
							>
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
