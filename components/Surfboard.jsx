import React from "react";
import PropTypes from "prop-types";

import SurfBoardBody from "./surfboard/SurfBoardBody";
import SurfBoardFooter from "./surfboard/SurfBoardFooter";
import SurfBoardNavbar from "./surfboard/SurfBoardNavbar";

const Surfboard = (props) => {
  console.log(props);
  return (
    <div>
      <SurfBoardNavbar />
      <SurfBoardBody />
      <SurfBoardFooter />
    </div>
  );
};

Surfboard.proptypes = {
  data: PropTypes.array,
};

export default Surfboard;
