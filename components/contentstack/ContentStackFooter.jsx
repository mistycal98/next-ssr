import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../fontawesome";

function ContentStackFooter(props) {
  return (
    <>
      <Container className="d-flex flex-row" expand="lg">
        <Container className="m-3">
          <Image src={props.logoBlack} alt="Raweng logo" width={250} height={40} />
          <Row className="w-100 my-2">
            <Col>
              <FontAwesomeIcon icon={["fab", "twitter"]} className="fs-6" />
            </Col>
            <Col>
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </Col>
            <Col>
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </Col>
            <Col>
              <FontAwesomeIcon icon={["fab", "youtube"]} />
            </Col>
            <Col>
              <FontAwesomeIcon icon={["fab", "github"]} />
            </Col>
          </Row>
        </Container>
        <Container className="h-auto m-3">
          <h4 className="d-block m-2 my-3">Product</h4>
          <a href="" className="d-block m-2">
            Features
          </a>
          <a href="" className="d-block m-2">
            For IT & Development
          </a>
          <a href="" className="d-block m-2">
            For Business
          </a>
          <a href="" className="d-block m-2">
            Integrations
          </a>
          <a href="" className="d-block m-2">
            Pricing
          </a>
          <a href="" className="d-block m-2">
            ROI Calculator
          </a>
          <a href="" className="d-block m-2">
            Customer Sucess
          </a>
        </Container>
        <Container className="h-auto m-3">
          <h4 className="d-block m-2 my-3">Users</h4>
          <a href="" className="d-block m-2">
            Supported Platform
          </a>
          <a href="" className="d-block m-2">
            FAQs
          </a>
          <a href="" className="d-block m-2">
            Trust
          </a>
          <a href="" className="d-block m-2">
            System Status
          </a>
        </Container>
        <Container className="h-auto m-3">
          <h4 className="d-block m-2 my-3">Education</h4>
          <a href="" className="d-block m-2">
            Customer Resources
          </a>
          <a href="" className="d-block m-2">
            CMS Guides
          </a>
          <a href="" className="d-block m-2">
            Blog
          </a>
          <a href="" className="d-block m-2">
            Docs
          </a>
        </Container>
        <Container className="h-auto m-3">
          <h4 className="d-block m-2 my-3">Company</h4>
          <a href="" className="d-block m-2">
            About
          </a>
          <a href="" className="d-block m-2">
            News
          </a>
          <a href="" className="d-block m-2">
            Press
          </a>
          <a href="" className="d-block m-2">
            Careers
          </a>
          <a href="" className="d-block m-2">
            Become a Partner
          </a>
          <a href="" className="d-block m-2">
            Contact Us
          </a>
        </Container>
      </Container>
      <hr className="mx-5" />
      <Container className="d-flex justify-content-end">
        <a href="" className="m-3">
          Terms
        </a>
        <a href="" className="m-3">
          Privacy
        </a>
      </Container>
    </>
  );
}

export default ContentStackFooter;
