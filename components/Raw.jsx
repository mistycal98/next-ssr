import React from "react";
import Navbar from "./raweng/Navbar";
import Footer from "./raweng/Footer";


export default function Raw(props) {
	console.log(props);
	return (
		<div>
			<Navbar/>
			<h1>Raw Engineering</h1>
			<Footer />
		</div>
	);
}
