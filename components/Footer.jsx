import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome"
import {Row,Col } from ""

const Footer = () => {
  return (
    <div className="d-flex p-2 h-auto bg-dark">
      <div className="mx-4 text-white">
        <h1>Get in Touch ➜</h1>
        <h4>CopyRight @ Tushar Mistry</h4>
      </div>
      <Row className="text-white">
        <a href=""><FontAwesomeIcon icon={["fab","github"]} /></a>
        <i className="fab fa-github fa-3x"></i>
        <i class="far fa-envelope fa-3x"></i>
      </Row>
    </div>
  );
};

export default Footer;