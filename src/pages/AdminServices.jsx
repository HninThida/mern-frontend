import { useCallback, useEffect, useState } from "react";
import { getRequest } from "../utils/api";
import { toast } from "react-toastify";
import { Table } from "react-bootstrap"; // Using react-bootstrap for table styling

const AdminServices = () => {
  const [data, setData] = useState([]); // Storing fetched data

  const handleGetServices = useCallback(() => {
    getRequest("services").then((res) => {
      if (res) {
        console.log(res.data);
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
    <div>
      {/* Left Sidebar */}
      {/* Main Content - Displaying Table */} {/* Flex to make it full width */}
      <h2>Services</h2>
      {data.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Service</th>
              <th>Description</th>
              <th>Price</th>
              <th>Provider</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.service}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.provider}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No services available</p>
      )}
    </div>
  );
};

export default AdminServices;
