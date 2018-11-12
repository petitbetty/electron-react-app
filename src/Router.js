import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Image from "./Image";
import App from "./App";

const Router = () => (
	<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/image" component={Image} />
			</Switch>
	</BrowserRouter>
);

export default Router;