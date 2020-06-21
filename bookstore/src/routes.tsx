import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from "react-router-dom";
import Home from "./pages/Home";
import Bookview from "./pages/Bookview";
import Editbook from "./pages/Editbook";
const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/bookview">
					<Bookview />
				</Route>
				<Route path="/editbook">
					<Editbook />
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes;
