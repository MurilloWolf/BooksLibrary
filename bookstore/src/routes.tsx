import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Bookview from "./pages/Bookview";
import Editbook from "./pages/Editbook";
const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/bookview/:id">
					<Bookview />
				</Route>
				<Route path="/editbook">
					<Editbook />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes;
