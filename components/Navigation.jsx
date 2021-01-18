import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function Navigation() {
	return (
		<Navbar bg="dark" variant="dark">
			<Link href="/">
				<a>
					<Navbar.Brand>
						<Image
							alt="Official logo"
							src="/50001008.5332ba36.png"
							width={300}
							height={70}
							className="d-inline-block align-top"
						/>
					</Navbar.Brand>
				</a>
			</Link>
			<Container className="justify-content-end mr-0">
				{/* Raw Engineering NavBar */}
				<Nav.Item>
					<Nav.Link>
						<Link href="/companies/raweng">
							<a>Raw Engineering</a>
						</Link>
					</Nav.Link>
				</Nav.Item>

				{/* ContentStack NavBar */}
				<Nav.Item>
					<Nav.Link>
						<Link href="/companies/contentstack">
							<a>ContentStack</a>
						</Link>
					</Nav.Link>
				</Nav.Item>

				{/* SurfBoard NavBar */}
				<Nav.Item>
					<Nav.Link>
						<Link href="/companies/surfboard">
							<a>Surfboard</a>
						</Link>
					</Nav.Link>
				</Nav.Item>
			</Container>
		</Navbar>
	);
}

export default Navigation;
