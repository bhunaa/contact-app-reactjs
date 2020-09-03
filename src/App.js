import React from "react";
import { Provider } from "react-redux";

import "./App.css";

import store from "../src/state/store";
import Routers from "./routes";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<Provider store={store}>
			<Routers />
		</Provider>
	);
}

export default App;
