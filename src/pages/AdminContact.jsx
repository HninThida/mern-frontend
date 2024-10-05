import { useCallback, useEffect, useState } from "react";
import { deleteRequest, getRequest } from "../utils/api";
import { toast } from "react-toastify";
import { Button, Table } from "react-bootstrap"; // Using react-bootstrap for modal, table, and form
import { FaTrash } from "react-icons/fa";

const AdminContact = () => {
  const [data, setData] = useState([]); // Storing fetched data

  // Fetch users
  const handleGetContacts = useCallback(() => {
    getRequest("admin/contact", true).then((res) => {
      if (res) {
        console.log(res.data);
        setData(res.data); // Update local state with data
      } else {
        toast.error("Failed to fetch users");
      }
    });
  }, []);

  useEffect(() => {
    handleGetContacts();
  }, [handleGetContacts]);
  // Handle delete user
  const handleDeleteContact = (id) => {
    deleteRequest(`admin/contact/delete/${id}`, true).then((res) => {
      if (res) {
        toast.success("Contact deleted successfully");
        handleGetContacts();
      } else {
        toast.error("Failed to delete contact");
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
              <th>Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item?.username}</td>
                <td>{item?.email}</td>
                <td>{item?.message}</td>
                <td className="text-center">
                  {/* <Button
                    size="sm"
                    className="me-2"
                    onClick={() => handleEditUser(item)}
                  >
                    <FaPencilAlt />
                  </Button> */}
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => handleDeleteContact(item._id)}
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No Contact available</p>
      )}
    </div>
  );
};

export default AdminContact;
