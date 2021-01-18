import React from "react";
import PropTypes from "prop-types";

const Contentstack = (props) => {
	console.log(props);
	return (
		<div>
			<h1>Contentstack</h1>
		</div>
	);
};

Contentstack.propTypes = {
	data: PropTypes.array,
};

export default Contentstack;
