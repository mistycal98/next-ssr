import React from "react";
import PropTypes from "prop-types";

import RawNavbar from "./raweng/RawNavbar";
import RawFooter from "./raweng/RawFooter";
import RawBody from "./raweng/RawBody";

const Raw = (props) => {
  console.log(props);
  return (
    <div className="d-flex flex-column">
      <RawNavbar logo={props.data[0].logo} className="flex-grow-1" />
      <RawBody
        favicon={props.data[0].favicon}
        image={props.data[0].content.image}
        className="flex-grow-4"
      />
      <RawFooter className="flex-grow-1" />
    </div>
  );
};

Raw.propTypes = {
  data: PropTypes.array,
};

export default Raw;
