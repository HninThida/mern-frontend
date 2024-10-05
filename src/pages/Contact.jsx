import { useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { postRequest, userData } from "../utils/api";
import { toast } from "react-toastify";

const Contact = () => {
  const initValue = {
    username: userData?.username,
    email: userData?.email,
    message: "",
  };
  const [formData, setformData] = useState(initValue);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postRequest("contact", formData);
      toast.success("Successfully Send");
      setformData(initValue);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Row className="my-4 mx-0">
      <Col className="mb-3">
        <div className="d-flex flex-center align-items-center justify-content-center">
          <Image
            src="images/support.png"
            width={350}
            height={350}
            alt="register"
            className="text-center mt-3"
          />
        </div>
      </Col>
      <Col className="mx-5 px-4">
        <h3 className="mb-3">Contact</h3>
        <Form onSubmit={handleSubmit}>
          {["username", "email", "message"].map((field, idx) => (
            <Form.Group className="mb-3" key={idx}>
              <Form.Label>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </Form.Label>
              <Form.Control
                required
                name={field}
                as={field === "message" ? "textarea" : "input"}
                rows={field === "message" ? 5 : undefined} // Set rows for textarea
                type={
                  field === "email"
                    ? "email"
                    : field === "password"
                    ? "password"
                    : field === "message"
                    ? "textarea"
                    : "text"
                }
                value={formData?.[field]}
                onChange={handleChange}
              />
            </Form.Group>
          ))}
          <Button variant="outline-primary" className="w-100" type="submit">
            Send
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Contact;
