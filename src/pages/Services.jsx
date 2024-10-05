import { useCallback, useEffect, useState } from "react";
import { getRequest } from "../utils/api";
import { toast } from "react-toastify";
import { Row, Col, Card, Image, Container } from "react-bootstrap";

const Services = () => {
  const [data, setData] = useState([]);

  const handleGetServices = useCallback(() => {
    getRequest("services").then((res) => {
      console.log(res.data);

      if (res) {
        setData(res.data); // Update local state with data
      } else {
        toast.error("Failed to fetch services");
      }
    });
  }, []);

  useEffect(() => {
    handleGetServices();
  }, [handleGetServices]);

  return (
    <Container>
      <Row className="mx-3 my-5">
        {data?.map((item, index) => (
          <Col key={index} md={4} sm={6} className="mb-4">
            <Card
              className="border-0 shadow-sm hover"
              style={{ height: "320px" }}
            >
              <Card.Body>
                <div className="d-flex align-items-center justify-content-center">
                  <Image src="images/design.png" width={180} height={180} />
                </div>
                <Card.Title>{item.service}</Card.Title>
                <Card.Text>{item.porvider}</Card.Text>
                <Card.Text>{item.description}</Card.Text>
                {/* <Card.Footer>
                  <small className="text-muted">Price: ${item.price} </small>
                </Card.Footer> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
