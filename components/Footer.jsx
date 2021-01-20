import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";
import { Col, Row } from "react-bootstrap";
import style from "../styles/Icon.module.scss";
const Footer = () => {
  return (
    <div className=" justify-content-around text-center  d-flex p-2 h-auto bg-dark">
      <div className="mx-4 text-white ">
        <h1>Get in Touch ➜</h1>
        <h4>CopyRight @ Tushar Mistry</h4>
      </div>
      <Row className={["text-white", style.icon]}>
        <Col>
          <a href="">
            <FontAwesomeIcon icon={["fab", "github"]} size="1x" />
          </a>
        </Col>
        <Col>
          <a href="">
            <FontAwesomeIcon icon={["fab", "whatsapp"]} />
          </a>
        </Col>
        <Col>
          <a href="">
            <FontAwesomeIcon icon={["far", "envelope"]} />
          </a>
        </Col>
        {/* <i className="fab fa-github fa-3x"></i>
        <i class="far fa-envelope fa-3x"></i> */}
      </Row>
    </div>
  );
};

export default Footer;
