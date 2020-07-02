import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Bookview from "./pages/Bookview";
import Editbook from "./pages/Editbook";
import CategoryView from "./pages/CategoryView";

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
				<Route path="/editbook/:id?">
					<Editbook />
				</Route>
				<Route path="/categoryView">
					<CategoryView />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes;
