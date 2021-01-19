import React from "react";
import PropTypes from "prop-types";

import RawNavbar from "./raweng/RawNavbar";
import RawFooter from "./raweng/RawFooter";
import RawBody from "./raweng/RawBody";

const Raw = (props) => {
	return (
		<div className="d-flex flex-column">
			<RawNavbar logo={props.data[0].logo} />
			<RawBody
				favicon={props.data[0].favicon}
				image={props.data[0].content.image}
				heading={props.data[0].content.heading}
				subHeading={props.data[0].content.subHeading}
			/>
			<RawFooter footerLinks={props.data[0].footerLinks} />
		</div>
	);
};

Raw.propTypes = {
	data: PropTypes.array,
};

export default Raw;
