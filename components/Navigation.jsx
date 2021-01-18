import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "next/image";
import Link from "next/link";

function Navigation() {
	return (
		<Navbar bg="dark" variant="dark">
			<Link href="/"><a><Navbar.Brand>
			<Image
			alt="Official logo"
			src="/50001008.5332ba36.png"
			width={300}
			height={70}
			className="d-inline-block align-top"
			/>
			</Navbar.Brand></a></Link>
			<Nav className="justify-content-end">
				<Nav.Item>
					<Link href="/companies/raweng">
						<a>
							<Nav.Link>Raw</Nav.Link>
						</a>
					</Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link>stack</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link>surf</Nav.Link>
				</Nav.Item>
			</Nav>
		</Navbar>
	);
}

export default Navigation;
