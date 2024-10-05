import { useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { postRequest } from "../utils/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Store";

const Register = () => {
  const navigate = useNavigate();
  const { setStoreLSToken } = useAuth();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await postRequest("auth/register", user);
      toast.success("Successfully register");
      setStoreLSToken(response.token);
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Row className="my-4 mx-0">
      <Col className="mb-3">
        <div className="d-flex flex-center align-items-center justify-content-center">
          <Image
            src="images/register.png"
            width={350}
            height={350}
            alt="register"
            className="text-center mt-3"
          />
        </div>
      </Col>
      <Col className="mx-5 px-4">
        <h3 className="mb-3">Registration Form</h3>
        <Form onSubmit={handleSubmit}>
          {["username", "email", "phone", "password"].map((field, idx) => (
            <Form.Group className="mb-3" key={idx}>
              <Form.Label>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </Form.Label>
              <Form.Control
                required
                name={field}
                type={
                  field === "email"
                    ? "email"
                    : field === "password"
                    ? "password"
                    : field === "phone"
                    ? "number"
                    : "text"
                }
                value={user?.[field]}
                onChange={handleChange}
              />
            </Form.Group>
          ))}
          <Button variant="outline-primary" className="w-100" type="submit">
            Register
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
