import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import "./header.css"

const routes = [
	{ name: "Home", href: "/" },
  { name: "Login", href: "/login" },
];

const NavMenu = ({ routes }) => (
	<Nav className="ms-auto mb-2 mb-lg-0 mt-4 mt-lg-0">
		{routes.map((route, i) => (
			<Nav.Item key={i}>
				<Nav.Link href={route.href}>{route.name}</Nav.Link>
			</Nav.Item>
		))}
	</Nav>
);

NavMenu.propTypes = {
	routes: PropTypes.array.isRequired,
};

const Header = () => {
	return (
		<div className="ezy__nav1 light">
			<Navbar expand="lg" className="py-3">
				<Container>
					<Navbar.Brand href="#">Hi! Ashish</Navbar.Brand>
					<Navbar.Toggle aria-controls="ezy__nav1-navbar-nav">
						<span>
							<span />
						</span>
					</Navbar.Toggle>
					<Navbar.Collapse id="ezy__nav1-navbar-nav">
						<NavMenu routes={routes} />
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};
export default Header;