import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../fontawesome";

function SurfBoardFooter(props) {
  return (
    <Container>
      <Container className="d-flex border border-primary">
        <Container>
          <Image src={props.logo} alt="Raweng logo" width={200} height={100} />
        </Container>
        <Container className="d-flex flex-column">
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
        <Container className="d-flex flex-column">
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
        <Container>
          <a href="">info@surfboardventures.com</a>
        </Container>
        <Container>
          <FontAwesomeIcon icon={["fab", "facebook"]} />
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          <FontAwesomeIcon icon={["fab", "twitter"]} />
          <FontAwesomeIcon icon={["fab", "youtube"]} />
          <FontAwesomeIcon icon={["fab", "instagram"]} />;
        </Container>
      </Container>
      <Container>Copyright © 2021 Surfboard Ventures. All Rights Reserved.</Container>
    </Container>
  );
}

export default SurfBoardFooter;
