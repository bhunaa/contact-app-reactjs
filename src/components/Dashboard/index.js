import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import Contact from "../Contact";
import Header from "../Header";

import "./styles/index.scss";

const NotFound = () => {
	return <div className="page-not-found">Page Not Found.</div>;
};

function Dashboard() {
	return (
		<Router>
			<Header />
			<Route
				render={() => (
					<React.Fragment>
						<SideNav>
							<SideNav.Toggle />
							<SideNav.Nav defaultSelected="home">
								<NavItem eventKey="">
									<NavIcon>
										<i className="fa fa-arrows-alt"></i>
									</NavIcon>
									<NavText></NavText>
								</NavItem>
								<NavItem eventKey="">
									<NavIcon>
										<i className="fa fa-user" />
									</NavIcon>
									<NavText></NavText>
								</NavItem>
								<NavItem eventKey="">
									<NavIcon>
										<i className="fa fa-bullseye" />
									</NavIcon>
									<NavText></NavText>
								</NavItem>{" "}
								<NavItem eventKey="">
									<NavIcon>
										<i className="fa fa-building" />
									</NavIcon>
									<NavText></NavText>
								</NavItem>
								<NavItem eventKey="">
									<NavIcon>
										<i className="fa fa-barcode" />
									</NavIcon>
									<NavText></NavText>
								</NavItem>
								<NavItem eventKey="">
									<NavIcon>
										<i className="fa fa-archive" />
									</NavIcon>
									<NavText></NavText>
								</NavItem>
								<NavItem eventKey="">
									<NavIcon>
										<i className="fas fa-power-off"></i>
									</NavIcon>
									<NavText></NavText>
								</NavItem>
							</SideNav.Nav>
						</SideNav>
						<Switch>
							<Route exact path="/" component={Contact} />
							<Route exact path="*" component={NotFound} />
						</Switch>
					</React.Fragment>
				)}
			/>
		</Router>
	);
}

export default Dashboard;
