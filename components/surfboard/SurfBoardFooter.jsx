import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../fontawesome";

function SurfBoardFooter(props) {
  return (
    <Container>
      <Container className="d-flex m-3">
        <Container>
          <Image src={props.logo} alt="Raweng logo" width={200} height={100} />
        </Container>
        <Container className="m-3 d-flex flex-column">
          <a href="" className="m-1">
            Portfolio
          </a>
          <a href="" className="m-1">
            Academy
          </a>
          <a href="" className="m-1">
            Events
          </a>
        </Container>
        <Container className="m-3 d-flex flex-column">
          <a href="" className="m-1">
            Gallery
          </a>
          <a href="" className="m-1">
            e-Certificates
          </a>
          <a href="" className="m-1">
            Contact Us
          </a>
        </Container>
        <Container className="m-3">
          <a href="">info@surfboardventures.com</a>
        </Container>
        <Row className="mt-3 w-100 h-100">
          <Col>
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </Col>
          <Col>
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </Col>
          <Col>
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </Col>
          <Col>
            <FontAwesomeIcon icon={["fab", "youtube"]} />
          </Col>
          <Col>
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </Col>
        </Row>
      </Container>
      <Container className="my-3 text-center">
        Copyright © 2021 Surfboard Ventures. All Rights Reserved.
      </Container>
    </Container>
  );
}

export default SurfBoardFooter;
