import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// icons
import "../fontawesome";
import React from "react";

function test() {
  return (
    <div>
      <a href="www.google.com" className="text-white">
        <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
      </a>
      <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
      <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
      <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
    </div>
  );
}

export default test;
