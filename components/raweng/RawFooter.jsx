import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import styles from "./raweng.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../fontawesome";

function RawFooter(props) {
  let footerLinks = props.footerLinks;
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
        <Row className=" w-25 h-100">
          <Col>
            <a href={props.footerLinks.twitter}>
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </Col>
          <Col>
            <a href={props.footerLinks.linkedin}>
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </Col>
          <Col>
            <a href={props.footerLinks.facebook}>
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
          </Col>
          <Col>
            <a href={props.footerLinks.instagram}>
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default RawFooter;
