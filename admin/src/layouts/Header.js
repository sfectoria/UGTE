import React from 'react'
import { FaBell,  FaCommentAlt } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import avatar from "../assets/images/avatar.jpg";
import { useSelector } from 'react-redux';


function Header() {
  const navigate = useNavigate();
  const me = useSelector(state => state.auth.me)



  return (
    <div className="position-fixed w-100" style={{ paddingLeft:  300 ,zIndex:2 }}>
      <div className="d-flex flex-row-reverse justify-content-between">
        <div className="d-flex mt-2 dropdownHeader ">
          <div className="p-2 icon" style={{ color: "#1a408c" }}>
            <FaBell />
          </div>
          <div className="p-2 icon" style={{ color: "#1a408c" }}>
            <FaCommentAlt />
          </div>
          <div className="icon" style={{ color: "#1a408c" }}>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdownMenu2">
                <img
                  src={avatar}
                  className="rounded-circle"
                  style={{ width: "40px", marginRight: "10px" }}
                  alt="Avatar"
                />
                {me?.name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item>Setting</Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/");
                    window.location.reload();
                  }}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Header;
