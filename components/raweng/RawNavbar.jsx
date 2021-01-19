import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import Image from "next/image";

import styles from "./raweng.module.scss";

function RawNavbar(props) {
	return (
		<Navbar collapseOnSelect bg="dark" expand="lg" className={["px-5", styles.nav]}>
			<Image src={props.logo} alt="Raweng logo" width={200} height={100} />
			<Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.burger} />
			<Navbar.Collapse className="justify-content-end mr-0">
				<Nav.Item className={styles["nav-link"]}>
					<NavDropdown title="WHAT WE DO"  className={styles["nav-link"]}>
						<NavDropdown.Item >Hello</NavDropdown.Item>
					</NavDropdown>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link className={styles["nav-link"]}>OUR WORK</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link className={styles["nav-link"]}>WHO WE ARE</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link className={styles["nav-link"]}>BLOG</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link className={styles["nav-link"]}>CAREERS</Nav.Link>
				</Nav.Item>
				<Button variant="secondary" className={["px-3", styles.rounded]}>
					CONTACT
				</Button>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default RawNavbar;
