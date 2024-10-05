import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container className="mb-5">
      <Row className="py-5">
        <Col md={6}>
          <div className="d-flex flex-column align-items-start jusify-conten-center py-3">
            <p className="">I am a Frontend Developer</p>
            <h3>Welcome to my website</h3>
            <p>
              Hi, I&apos;m Hnin Thida, a passionate Frontend Developer with
              expertise in React and Next.js. I create intuitive, responsive web
              applications with clean code and a focus on user experience.
              Let&apos;s build something amazing together!
            </p>
          </div>
          <div className="d-flex flex-wrap">
            <Button
              variant="primary"
              className="me-3"
              onClick={() => navigate("/contact")}
            >
              Connect Now
            </Button>
            <Button variant="outline-primary">Learn More</Button>
          </div>
        </Col>
        <Col md={6}>
          <div
            className="d-flex flex-center align-items-center justify-content-center"
            onClick={() => navigate("/about")}
          >
            <Image src="images/home.png" width={280} />
          </div>
        </Col>
      </Row>
      <Row>
        <div className="bg-light py-4 rounded">
          <Container>
            <Row className="text-center">
              <Col xs={6} md={3} className="border-end">
                <h3>50+</h3>
                <p>Registered Companies</p>
              </Col>
              <Col xs={6} md={3} className="border-end">
                <h3>100,000+</h3>
                <p>Happy Clients</p>
              </Col>
              <Col xs={6} md={3} className="border-end">
                <h3>500+</h3>
                <p>Well Known Developers</p>
              </Col>
              <Col xs={6} md={3}>
                <h3>24/7</h3>
                <p>Service</p>
              </Col>
            </Row>
          </Container>
        </div>
      </Row>
      <HeroSection />
    </Container>
  );
};

export default Home;
