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
import Okay from "../okay";
import Modal from "../modal";
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
	const [showModal, setShowModal] = useState(false);
	const [finished, setFinished] = useState(false);
	/* Errors */

	const [titleError, setTitleError] = useState(false);
	const [descriptionError, setDescriptionError] = useState(false);
	const [authError, setAuthError] = useState(false);

	const id = useSelector((state: any) => {
		const sizeOfArray = state.books.length - 1;
		const autoIncrement = state.books[sizeOfArray].id + 1;

		return autoIncrement;
	});

	async function handleSave(event: React.FormEvent) {
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
			await dispatch(addBook(book));
			setFinished(true);
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

	function confirmeCancel() {
		setShowModal(true);
	}

	function confirmeSave() {
		setFinished(true);
		/* const isValid = validateForm();
		if (isValid) setShowModal(true); */
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
		return Object.keys(props.book).length !== 0;
	}

	function loadInfo() {
		if (isEditing()) {
			const { book } = props;

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
						{console.log(props.book)}
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
							content={isEditing() ? props.book.image : ""}
							error={authError}
						/>
					</UrlImage>
					<FormImageUpload>
						<Preview>
							<img src={isEditing() ? props.book.image : image} alt={title} />
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
							<Button onClick={confirmeSave} type="save">
								Save
							</Button>
							<Button onClick={confirmeCancel} type="cancel">
								Cancel
							</Button>
						</ButtonBar>
					</FormFooter>
				</fieldset>
			</form>
			<Modal
				title={"Deseja cancelar a operação"}
				show={showModal}
				setShow={setShowModal}
				action={() => alert("ação cancelada")}
			/>
			<Modal
				title={"Deseja cadastrar o livro? "}
				content={title}
				show={showModal}
				setShow={setShowModal}
				action={isEditing() ? handleEdit : handleSave}
			/>
			<Okay show={finished} />
		</Container>
	);
};

export default Formbook;
