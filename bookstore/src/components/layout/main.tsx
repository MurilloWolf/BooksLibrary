import React, { ReactNode } from "react";

import Header from "../header";

interface Props {
	children?: ReactNode;
}

const layout: React.FC<Props> = (props) => {
	return (
		<>
			<Header />
			{props.children}
		</>
	);
};

export default layout;
