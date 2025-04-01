import React, { useState } from "react";
import { Drawer } from "antd";
import { ChevronRight, ClipboardCheck, Menu } from "lucide-react";
import "./styles/home.css";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="home-container">
      <div className="menu-button" onClick={() => setOpen(true)}>
        <Menu className="menu-icon" />
      </div>

      <h1 className="custom-font home-logo">logo</h1>

      <div className="home-input-wrapper">
        <input
          type="text"
          placeholder="Enter video URL"
          className="home-input"
        />
        <div className="home-button-group">
          <button className="home-action-button">
            <span className="material-icons-round">inventory</span>
          </button>
          <a href="/result">
            <button className="home-submit-button">
              <span className="material-icons-round">chevron_right</span>
            </button>
          </a>
        </div>
      </div>

      <div className="home-info">
        <div className="home-info-bullets">
          <span className="home-info-item active">● blabla</span>
          <span className="home-info-item">● blabla</span>
        </div>
        <div className="home-info-text">
          <h2 className="home-info-title">Title</h2>
          <p className="home-info-description">Description text goes here.</p>
        </div>
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <p className="home-menu-item">Menu Item 1</p>
        <p className="home-menu-item">Menu Item 2</p>
      </Drawer>
    </div>
  );
}
