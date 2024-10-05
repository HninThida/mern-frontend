import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, Navigate, Outlet } from "react-router-dom";
import { MdPerson } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { userData } from "../utils/api";

const AdminLayout = () => {
  if (userData?.isAdmin) {
    return (
      <>
        <div style={{ display: "flex" }}>
          <Sidebar style={{ height: "70vh" }}>
            <Menu
              menuItemStyles={{
                button: {
                  // the active class will be added automatically by react router
                  // so we can use it to style the active menu item
                  [`&.active`]: {
                    backgroundColor: "#13395e",
                    color: "#b6c8d9",
                  },
                },
              }}
            >
              <MenuItem component={<Link to="/admin/users" />}>
                <MdPerson /> <span className="ms-2">Users</span>
              </MenuItem>
              <MenuItem component={<Link to="/admin/contact" />}>
                <FaEnvelope /> <span className="ms-2">Contact</span>
              </MenuItem>
            </Menu>
          </Sidebar>

          <div style={{ flex: 1, padding: "20px" }}>
            {/* Outlet will render the matched child route's component */}
            <Outlet />
          </div>
        </div>
      </>
    );
  } else {
    return <Navigate to={"/"} />;
  }
};

export default AdminLayout;
