import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// icons
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import React from "react";

function test() {
	return (
		<div>
			<FontAwesomeIcon icon={faCode} />
            <FontAwesomeIcon icon={faTwitter}/>
		</div>
	);
}

export default test;
