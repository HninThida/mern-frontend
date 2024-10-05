import { Button, Col, Container, Row } from "react-bootstrap";
import { userData } from "../utils/api";

const About = () => {
  return (
    <div className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2>About me</h2>
            <p>
              Hi! I&apos;m {userData?.username || "Hnin Thida"}, a passionate
              frontend developer with expertise in React and Next.js. I love
              building responsive, user-friendly web applications that solve
              real-world problems. With a strong foundation in JavaScript, HTML,
              and CSS, I strive to create clean, efficient code that ensures
              optimal performance.
            </p>

            <p>
              I’m always eager to learn new technologies and enjoy collaborating
              with teams to bring creative ideas to life. My focus is on
              delivering high-quality, scalable solutions that not only meet but
              exceed expectations.
            </p>
            <p>
              When I’m not coding, you can find me exploring design trends,
              learning about the latest in web development, or working on
              exciting personal projects.
            </p>
            <Button variant="primary" className="me-3">
              Connect Now
            </Button>
            <Button variant="outline-light">Learn More</Button>
          </Col>
          <Col md={6}>
            <img
              src="images/about.png"
              alt="Why Choose Us Illustration"
              className="img-fluid"
              width={400}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
