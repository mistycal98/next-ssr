import React from "react";
import { Button } from "react-bootstrap";
import PropType from "prop-types";

function ButtonComponent(props) {
	return (
		<div>
			<Button variant="outline-warning">{props.content}</Button>
		</div>
	);
}

ButtonComponent.propTypes = {
	content: PropType.string,
};

export default ButtonComponent;
