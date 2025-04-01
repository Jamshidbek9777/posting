import React from "react";
import "../styles/detail.css";

const Detail = () => {
  return (
    <div className="detail-container">
      <div className="detail-card">
        <div className="detail-profile">
          <img
            src="/path-to-profile.jpg"
            alt="Profile"
            className="detail-profile-image"
          />
          <div className="detail-profile-info">
            <h2 className="detail-username">username</h2>
            <p className="detail-time">2 hours ago</p>
          </div>
        </div>

        <div className="relative">
          <video
            controls
            className="detail-video"
            src="/vid/sample-vid.mp4"
          ></video>
        </div>
      </div>

      <div className="detail-download-container">
        <div className="detail-download-option">
          <span>Video without watermark</span>
          <button className="detail-download-button">Download</button>
        </div>
        <div className="detail-download-option">
          <span>Only sound</span>
          <button className="detail-download-button">Download</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
