import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

const Layout = (props) => {
  return (
    <div className="d-flex flex-column vh-100">
      <Navigation className="flex-grow-1" />
      <Container className="flex-2 vh-100">{props.children}</Container>
      <Footer className="flex-grow-1" />
    </div>
  );
};

export default Layout;
