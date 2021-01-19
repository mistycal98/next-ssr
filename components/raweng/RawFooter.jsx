import React from "react";
import { Container, Button } from "react-bootstrap";
import styles from "./raweng.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../fontawesome";

function RawFooter(props) {
  console.log(props);
  return (
    <footer className="d-flex flex-column bg-dark text-white">
      <Container className="w-100 m-auto p-3 text-center">
        <h3>Ready to get started on your next project?</h3>
        <Button variant="secondary" className={["mt-5 px-3", styles.rounded]}>
          GET IN TOUCH
        </Button>
      </Container>
      <Container className="d-flex">
        <Container className=" w-100 m-auto">
          <p className="m-3 d-inline ">Privacy</p>{" "}
          <p className="m-3 d-inline"> Backend Term of Use</p>
          <p className="m-3 fs-7">Copyright © 2021 Raw Engineering LLC. All Rights Reserved.</p>
        </Container>
        <Container className="d-flex justify-content-end border border-primary w-100 mt-0">
          <FontAwesomeIcon className="m-3" icon={["fab", "twitter"]} size="2x" />
          <FontAwesomeIcon className="m-3" icon={["fab", "instagram"]} size="2x" />
          <FontAwesomeIcon className="m-3" icon={["fab", "linkedin"]} size="2x" />
          <FontAwesomeIcon className="m-3" icon={["fab", "facebook"]} size="2x" />
          {/* <FontAwesomeIcon icon={faLinkedinIn} className="text-white m-3" size="2x" />
          <FontAwesomeIcon icon={faFacebookF} className="text-white m-3" size="2x" /> */}
        </Container>
      </Container>
    </footer>
  );
}

export default RawFooter;
