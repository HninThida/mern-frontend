import { useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { postRequest } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/Store";

const Login = () => {
  const navigate = useNavigate();
  const { setStoreLSToken } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await postRequest("auth/login", user);
    console.log(response);
    if (response.statusCode != 400) {
      toast.success("Successfully login");
      setStoreLSToken(response.token);
      navigate("/");
    } else {
      toast.error(response.message);
    }
  };

  return (
    <Row className="my-5 mx-0">
      <Col className="mb-3">
        <div className="d-flex flex-center align-items-center justify-content-center">
          <Image
            src="images/login.png"
            width={350}
            height={350}
            alt="register"
            className="text-center mt-3"
          />
        </div>
      </Col>
      <Col className="mx-5 px-4">
        <h3 className="mb-3">Login Form</h3>
        <Form onSubmit={handleSubmit}>
          {["email", "password"].map((field, idx) => (
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
                    : "text"
                }
                value={user?.[field]}
                onChange={handleChange}
              />
            </Form.Group>
          ))}
          <Button variant="outline-primary" className="w-100" type="submit">
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
