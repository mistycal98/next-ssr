import React from "react";
import PropTypes from "prop-types";

import ContentStackNavbar from "./contentstack/ContentStackNavbar";
import ContentStackBody from "./contentstack/ContentStackBody";
import ContentStackFooter from "./contentstack/ContentStackFooter";

const Contentstack = (props) => {
  console.log(props);
  return (
    <div>
      <ContentStackNavbar />
      <ContentStackBody />
      <ContentStackFooter />
    </div>
  );
};

Contentstack.propTypes = {
  data: PropTypes.array,
};

export default Contentstack;
