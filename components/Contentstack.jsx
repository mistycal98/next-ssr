import React from "react";
import PropTypes from "prop-types";

import ContentStackNavbar from "./contentstack/ContentStackNavbar";
import ContentStackBody from "./contentstack/ContentStackBody";
import ContentStackFooter from "./contentstack/ContentStackFooter";

const Contentstack = (props) => {
  return (
    <div>
      <ContentStackNavbar logoWhite={props.data[0].logoWhite} />
      <ContentStackBody
        favicon={props.data[0].favicon}
        image={props.data[0].content.image}
        content={props.data[0].content}
      />
      <ContentStackFooter
        logoBlack={props.data[0].logoBlack}
        footerLinks={props.data[0].footerLinks}
      />
    </div>
  );
};

Contentstack.propTypes = {
  data: PropTypes.array,
};

export default Contentstack;
