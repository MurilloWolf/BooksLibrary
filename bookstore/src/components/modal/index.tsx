import React from "react";

import { Container, MainModal } from "./styles";
import { Button } from "../form";
interface Props {
	title?: string;
	content?: string;
	show: boolean;
	action(event?: React.FormEvent): void;
	setShow(value: boolean): void;
}

const Modal: React.FC<Props> = (props) => {
	return (
		<Container show={props?.show}>
			<MainModal>
				<h3>{props.title}</h3>
				<p>{props.content}</p>
				<div>
					<Button type={"save"} onClick={props.action}>
						Confirmar
					</Button>
					<Button type={"cancel"} onClick={() => props.setShow(false)}>
						Cancelar
					</Button>
				</div>
			</MainModal>
		</Container>
	);
};

export default Modal;
