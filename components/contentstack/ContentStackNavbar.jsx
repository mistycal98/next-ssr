import React from "react";
import styles from "./contentStack.module.scss";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function ContentStackNavbar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className={["p-4 px-5 h-auto", styles.nav]}>
      <Link href="/">
        <a>
          <Image src={props.logoWhite} alt="Raweng logo" width={250} height={40} />
        </a>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.burger} />
      <Navbar.Collapse className="justify-content-end mr-0">
        <Nav.Item>
          <Nav.Link className={styles["nav-link"]}>Product</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={styles["nav-link"]}>Resources</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={styles["nav-link"]}>Customers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={styles["nav-link"]}>Partners</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={styles["nav-link"]}>Company</Nav.Link>
        </Nav.Item>
        <Button className={["px-3 py-1", styles.stackBtn]}>REQUEST DEMO</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ContentStackNavbar;
