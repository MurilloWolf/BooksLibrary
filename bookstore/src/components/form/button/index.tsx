import React, { ReactNode } from "react";
import { FiSave } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

import { Container } from "./styles";

interface Props {
	children?: ReactNode;
	onClick(event: React.FormEvent): void;
	type?: string;
}
const Button: React.FC<Props> = (props) => {
	function switchIcon() {
		switch (props.type) {
			case "cancel":
				return <IoIosClose size={24} />;

			case "save":
				return <FiSave size={24} />;

			case "edit":
				break;

			case "delete":
				break;

			default:
				return <></>;
		}
	}

	function switchColor() {
		switch (props.type) {
			case "cancel":
				return "#c1292e";

			case "save":
				return "#78bc61";

			case "edit":
				break;

			case "delete":
				break;

			default:
				return <></>;
		}
	}

	return (
		<Container>
			<button
				onClick={props.onClick}
				style={{ background: "" + switchColor() }}
			>
				{props.type && switchIcon()}
				{props.children}
			</button>
		</Container>
	);
};

export default Button;
