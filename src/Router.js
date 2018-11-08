import React from "react";
import App from "/App";
import Image from ".Image";

const Router = () => {
	<BrowserRouter>
		<Router exact path="/" component={App} />
		<Router exact path="/image" component={Image} />

	</BrowserRouter>
}

export default Router;