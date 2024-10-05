import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth } from "../context/Store";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { loggedIn } = useAuth();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">CodeWithHnin </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" active={isActive("/")}>
              Home
            </Nav.Link>
            <Nav.Link href="/services" active={isActive("/services")}>
              Services
            </Nav.Link>
            <Nav.Link href="/about" active={isActive("/about")}>
              About
            </Nav.Link>
            <Nav.Link href="/contact" active={isActive("/contact")}>
              Contact
            </Nav.Link>
            {loggedIn ? (
              <>
                <Nav.Link href="/logout" active={isActive("/logout")}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/register" active={isActive("/register")}>
                  Register
                </Nav.Link>
                <Nav.Link href="/login" active={isActive("/login")}>
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
