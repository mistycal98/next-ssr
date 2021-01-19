import React from "react";
import PropTypes from "prop-types";

import ContentStackNavbar from "./contentstack/ContentStackNavbar";
import ContentStackBody from "./contentstack/ContentStackBody";
import ContentStackFooter from "./contentstack/ContentStackFooter";

const Contentstack = (props) => {
  console.log(props);
  return (
    <div>
      <ContentStackNavbar logoWhite={props.data[0].logoWhite} logoBlack={props.data[0].logoBlack} />
      <ContentStackBody
        favicon={props.data[0].favicon}
        image={props.data[0].content.image}
        content={props.data[0].content}
      />
      <ContentStackFooter />
    </div>
  );
};

Contentstack.propTypes = {
  data: PropTypes.array,
};

export default Contentstack;
