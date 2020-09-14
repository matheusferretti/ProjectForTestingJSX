import React from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Jumbotron from "./Jumbotron";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Welcome />
			<Jumbotron />
		</div>
	);
}
