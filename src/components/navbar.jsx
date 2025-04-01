import { Drawer } from "antd";
import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <a href="/" className="logo">
        <h1 className="custom-font">logo</h1>
      </a>

      <div className="search-container">
        <input
          type="text"
          placeholder="Enter @username"
          className="search-input"
        />
        <button className="search-button">
          <span className="material-icons-round">search</span>
        </button>
      </div>

      <div className="nav-menu-button" onClick={() => setOpen(true)}>
        <span className="material-icons-round">menu</span>
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <div className="drawer-search">
          <input
            type="text"
            placeholder="Enter @username"
            className="search-input"
          />
          <button className="search-button">
            <span className="material-icons-round">search</span>
          </button>
        </div>

        <p className="menu-item">Menu Item 1</p>
        <p className="menu-item">Menu Item 2</p>
      </Drawer>
    </div>
  );
};

export default Navbar;
