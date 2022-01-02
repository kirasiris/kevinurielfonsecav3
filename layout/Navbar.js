import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import MyLogo from "@/images/site_logo.png";

const Menu = ({ classGiven }) => {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			className={`${classGiven} me-0 pb-2 pt-2`}
			variant="dark"
		>
			<Container fluid>
				<Navbar.Brand href="/">
					<Image
						alt=""
						src={`${MyLogo.src}`}
						width={`${MyLogo.width}`}
						height={`${MyLogo.height}`}
						className="d-inline-block align-top"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Link href="/blog">
							<a className="nav-link">Blog</a>
						</Link>
						<Link href="/themes">
							<a className="nav-link">Themes</a>
						</Link>
					</Nav>
					<Nav>
						<Link href="/privacy-policy">
							<a className="nav-link">Privacy Policy</a>
						</Link>
						<Link href="/terms-of-service">
							<a className="nav-link">Terms of Service</a>
						</Link>
						<Link href="/support">
							<a className="nav-link">Support</a>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Menu;
