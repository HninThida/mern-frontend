import { useCallback, useEffect, useState } from "react";
import { deleteRequest, getRequest, patchRequest } from "../utils/api";
import { toast } from "react-toastify";
import { Button, Table, Modal, Form } from "react-bootstrap"; // Using react-bootstrap for modal, table, and form
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const AdminUser = () => {
  const [data, setData] = useState([]); // Storing fetched data
  const [show, setShow] = useState(false); // Modal visibility
  const [currentUser, setCurrentUser] = useState(null); // Store current user to edit
  const [editData, setEditData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  // Fetch users
  const handleGetUsers = useCallback(() => {
    getRequest("admin/users", true).then((res) => {
      if (res) {
        console.log(res.data);
        setData(res.data); // Update local state with data
      } else {
        toast.error("Failed to fetch users");
      }
    });
  }, []);

  useEffect(() => {
    handleGetUsers();
  }, [handleGetUsers]);

  // Open modal and set user to edit
  const handleEditUser = (user) => {
    setCurrentUser(user);
    setEditData({
      username: user.username,
      email: user.email,
      phone: user.phone,
    });
    setShow(true); // Open modal
  };

  // Handle form change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submit updated user data
  const handleSubmitEdit = () => {
    patchRequest(`admin/user/update/${currentUser._id}`, editData, true).then(
      (res) => {
        if (res) {
          toast.success("User updated successfully");
          handleGetUsers(); // Refresh user list
          setShow(false); // Close modal
        } else {
          toast.error("Failed to update user");
        }
      }
    );
  };

  // Handle delete user
  const handleDeleteUser = (id) => {
    deleteRequest(`admin/user/delete/${id}`, true).then((res) => {
      if (res) {
        toast.success("User deleted successfully");
        handleGetUsers();
      } else {
        toast.error("Failed to delete user");
      }
    });
  };

  return (
    <div
      style={{
        maxHeight: "400px", // Adjust the max height as needed
        overflowY: "auto", // Enable vertical scroll if content overflows
        overflowX: "auto", // Enable horizontal scroll for large tables
        marginTop: "20px", // Some spacing for the table
      }}
    >
      {/* Displaying Table */}
      {data?.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item?.username}</td>
                <td>{item?.email}</td>
                <td>{item?.phone}</td>
                <td className="text-center">
                  <Button
                    size="sm"
                    className="me-2"
                    onClick={() => handleEditUser(item)}
                  >
                    <FaPencilAlt />
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => handleDeleteUser(item._id)}
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No Users available</p>
      )}

      {/* Edit User Modal */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={editData.username}
                onChange={handleInputChange}
                placeholder="Enter username"
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={editData.email}
                onChange={handleInputChange}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mt-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={editData.phone}
                onChange={handleInputChange}
                placeholder="Enter phone number"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminUser;
