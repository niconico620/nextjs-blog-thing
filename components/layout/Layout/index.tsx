import React from "react";
import Navigation from "../Navigation";

function Layout(props: any) {
	return (
		<>
			<Navigation />
			<main>{props.children}</main>
		</>
	);
}

export default Layout;
