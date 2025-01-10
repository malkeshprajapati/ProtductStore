import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import {
  BadgeContainer,
  NavbarStyle,
  ProfileName,
  LogOutButton,
} from "../styles/layoutStyle";
import { useLocation, useNavigate } from "react-router-dom";
import Search from "../components/search";
import { IoMdMenu } from "react-icons/io";

const Navbar = ({ setSidebarShow }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleShow = () => {
    setShow(!show);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <NavbarStyle>
      <IoMdMenu className="menu-svg" onClick={() => setSidebarShow()} />
      <h1>Store</h1>
      {location.pathname === "/" && <Search />}
      <BadgeContainer onClick={handleShow}>
        <ProfileName>{userData.name}</ProfileName>
        <FaCaretDown />
      </BadgeContainer>
      {show && <LogOutButton onClick={handleLogout}>Logout</LogOutButton>}
    </NavbarStyle>
  );
};

export default Navbar;
