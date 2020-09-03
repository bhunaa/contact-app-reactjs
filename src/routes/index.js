import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "../components/Dashboard";

const NotFound = () => {
	return <div>Page Not Found.</div>;
};

const supportsHistory = "pushState" in window.history;

function RouterComponent() {
	return (
		<div>
			<Router forceRefresh={!supportsHistory}>
				<div>
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route exact path="*" component={NotFound} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default RouterComponent;
