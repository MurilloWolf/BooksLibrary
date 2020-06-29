import { createStore } from "redux";
import reducers from "../reducers";
import { loadState, saveState } from "../../utils/PersistedState";

const persistedState = loadState();
const store = createStore(reducers, persistedState);

const autoSave = setInterval(() => {
	saveState(store.getState());
}, 1000);

store.subscribe(() => autoSave);

export default store;
