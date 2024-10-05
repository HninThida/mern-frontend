import { Container, Row, Col, Button, Image } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section className="section-hero">
      <Container className="my-5">
        <Row className="align-items-center">
          {/* Hero Image */}
          <Col md={6} className="mb-4 mb-md-0">
            <div className=" text-center">
              <Image
                src="images/design.png"
                width={400}
                height={350}
                alt="coding together"
              />
            </div>
          </Col>

          {/* Hero Content */}
          <Col md={6}>
            <div>
              <p>We are here to help you</p>
              <h3>Get Started Today</h3>
              <p>
                Ready to take the first step towards a more efficient and secure
                IT infrastructure? Contact us today for a free consultation and
                let&apos;s discuss how we can help your business thrive in the
                digital age.
              </p>
              <div className="btn-group mt-4">
                <a href="/contact" className="me-3">
                  <Button variant="primary">Connect Now</Button>
                </a>
                <a href="/services">
                  <Button variant="outline-primary">Learn More</Button>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
