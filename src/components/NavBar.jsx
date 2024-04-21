/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  Home,
  Storefront,
  AccountCircle,
  ShoppingCart,
  OpenInFull,
  CloseFullscreen,
} from "@mui/icons-material";
import "../styles/Navbar.css";

function Navbar() {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Sidebar
        rootStyles={{
          borderRadius: "10px",
          backgroundColor: "white",
          height: "100vh",
        }}
        className="sidebar"
        collapsed={collapsed}
        onBackdropClick={() => collapsed(collapsed)}
      >
        <Menu
          rootStyles={{
            borderRadius: "10px",
          }}
          className="menu"
        >
          <MenuItem
            rootStyles={{
              borderRadius: "10px",
            }}
            component={<Link to="/" />}
            className="menu-item"
            icon={<Home />}
          >
            Home
          </MenuItem>
          <MenuItem
            component={<Link to="/Shop" />}
            className="menu-item"
            icon={<Storefront />}
          >
            Shop
          </MenuItem>

          <SubMenu
            className="menu-item "
            label="Account"
            icon={<AccountCircle />}
          >
            <MenuItem
              className="submenu-item"
              component={<Link to="/Account" />}
            >
              {" "}
              Log in{" "}
            </MenuItem>
            <MenuItem
              className="submenu-item"
              component={<Link to="/Points" />}
            >
              {" "}
              Points{" "}
            </MenuItem>
          </SubMenu>
          <SubMenu
            className="menu-item"
            suffix={"14"}
            label="Cart"
            icon={<ShoppingCart />}
          >
            <MenuItem className="submenu-item" component={<Link to="/Cart" />}>
              View Cart{" "}
            </MenuItem>
            <MenuItem
              className="submenu-item"
              component={<Link to="/Checkout" />}
            >
              {" "}
              Checkout{" "}
            </MenuItem>
          </SubMenu>
          <MenuItem onClick={handleToggleSidebar} className="toggle">
            {collapsed ? <OpenInFull /> : <CloseFullscreen />}
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}

export default Navbar;
