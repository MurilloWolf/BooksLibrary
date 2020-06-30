import React from "react";
import { Provider } from "react-redux";
import GlobalStyles from "./styles/globalStyle";
import Routes from "./routes";
import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<GlobalStyles />
				<Routes />
			</div>
		</Provider>
	);
}

export default App;
