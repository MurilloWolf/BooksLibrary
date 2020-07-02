import React from "react";
import { Link } from "react-router-dom";
import { Container, MainModal } from "./styles";
import image from "../../styles/assets/thanks.svg";

interface Props {
	show: boolean;
}

const Modal: React.FC<Props> = (props) => {
	return (
		<Container show={props?.show}>
			<MainModal>
				<h3>Thank you for help us</h3>
				<img src={image} alt="thanks" />
				<p>What you want to do now ? </p>
				<div>
					<ul>
						<li>
							<Link to="/editBook">Add a new Book</Link>
						</li>
						<li>
							<Link to="/categoryView">Search a Book</Link>
						</li>
						<li>
							<Link to="/categoryView">Take me to Home </Link>
						</li>
					</ul>
				</div>
			</MainModal>
		</Container>
	);
};

export default Modal;
