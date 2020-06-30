import React from "react";
import Error404 from "../../components/erro404";
import MainLayout from "../../components/layout/main";
const NotFound: React.FC = () => {
	return (
		<MainLayout>
			<Error404 />
		</MainLayout>
	);
};

export default NotFound;
