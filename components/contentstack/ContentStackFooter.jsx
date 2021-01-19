import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function ContentStackFooter(props) {
  return (
    <>
      <Container>
        <Container className="m-3">
          <Image src={props.logoBlack} alt="Raweng logo" width={250} height={40} />
          <Container>
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default ContentStackFooter;
