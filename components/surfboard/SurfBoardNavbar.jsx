import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import styles from "./surfboard.module.scss";
import Image from "next/image";

function SurfBoardNavbar(props) {
  console.log(props);
  return (
    <Navbar collapseOnSelect bg="light" expand="lg" className={["px-5", styles.nav]}>
      <Image src={props.logo} alt="Raweng logo" width={200} height={100} />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.burger} />
      <Navbar.Collapse className="justify-content-end mr-0">
        <Nav.Item>
          <Nav.Link className={styles["nav-link"]}>Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={styles["nav-link"]}>Academy</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={styles["nav-link"]}>Events</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={styles["nav-link"]}>Gallery</Nav.Link>
        </Nav.Item>
        <Button variant="secondary" className={["px-4", styles.rounded]}>
          Contact Us
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SurfBoardNavbar;
