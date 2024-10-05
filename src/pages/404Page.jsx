import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Make sure to install react-router-dom

const NotFound = () => {
  return (
    <Container className="text-center py-5">
      <Row
        className="justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <Col md={6}>
          <h1 className="display-1 text-primary">404</h1>
          <h2 className="mb-4">Oops! Page Not Found</h2>
          <p className="mb-4">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link to="/">
            <Button variant="outline-primary">Go to Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
