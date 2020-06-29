import React from "react";
import { Provider } from "react-redux";
import GlobalStyles from "./styles/globalStyle";
/* import PersistedState from "./utils/PersistedState";
 */ import Routes from "./routes";
import store from "./redux/store";

/* const LocalStoreState = React.createContext({ persistStore: () => {} });
 */
function App() {
	/* 	const [appState, setAppState] = PersistedState("BookStore", store);
	 */ /* const saveStore = () => {
		setAppState();
	}; */

	return (
		/* 		<LocalStore.Provider value={{ persistStore: saveStore }}>
		 */

		<Provider store={store}>
			<div className="App">
				<GlobalStyles />
				<Routes />
			</div>
		</Provider>
		/* 		</LocalStore.Provider>
		 */
	);
}

export default App;
