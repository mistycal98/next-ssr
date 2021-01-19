import React from "react";
import PropTypes from "prop-types";

import SurfBoardBody from "./surfboard/SurfBoardBody";
import SurfBoardFooter from "./surfboard/SurfBoardFooter";
import SurfBoardNavbar from "./surfboard/SurfBoardNavbar";

const Surfboard = (props) => {
  return (
    <div>
      <SurfBoardNavbar logo={props.data.logo} />
      <SurfBoardBody
        favicon={props.data.favicon}
        content={props.data.content}
        image={props.data.content.image}
      />
      <SurfBoardFooter footerLinks={props.data.footerLinks} logo={props.data.logo} />
    </div>
  );
};

Surfboard.proptypes = {
  data: PropTypes.array,
};

export default Surfboard;
