import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { userData } from "../utils/api";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <h5>{userData?.username || "Hnin Thida"}</h5>
            <p>Frontend Developer | React & Next.js</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a
              href="https://github.com/hninthida"
              target="_blank"
              className="text-white mx-2"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/hnin-thida-357b8a32a"
              target="_blank"
              className="text-white mx-2"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:hninthida844@gmail.com"
              target="_blank"
              className="text-white mx-2"
            >
              <FaEnvelope />
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p className="mb-0">
              &copy; {new Date().getFullYear()}{" "}
              {userData?.username || "Hnin Thida"}. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
