import React from "react";
import { SideBarChildren, SidebarStyle } from "../styles/layoutStyle";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

const Sidebar = ({ sidebarShow, closeSidebar }) => {
  return (
    <SidebarStyle isOpen={sidebarShow}>
      <IoCloseSharp className="close-menu" onClick={() => closeSidebar()} />
      <SideBarChildren>
        <li>
          <Link to={"profile"}>My rofile</Link>
        </li>
        <li>
          <Link to={"/"}>Products</Link>
        </li>
      </SideBarChildren>
    </SidebarStyle>
  );
};

export default Sidebar;
