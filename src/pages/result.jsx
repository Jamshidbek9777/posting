import React, { useState } from "react";
import { Download } from "lucide-react";
import { Modal } from "antd";
import "../styles/result.css";

const ResultPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const images = [
    "/img/image1.jpeg",
    "/img/image1.jpeg",
    "/img/image1.jpeg",
    "/img/image1.jpeg",
    "/img/image1.jpeg",
    "/img/image1.jpeg",
    "/img/image1.jpeg",
    "/img/image1.jpeg",
  ];

  const openModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="result-container">
      <div className="result-profile">
        <img
          src="/img/image1.jpeg"
          alt="Profile"
          className="result-profile-image"
        />
        <h2 className="result-username">@username</h2>
        <p className="result-post-count">8 POSTS</p>
      </div>

      <div className="result-grid">
        {images.map((img, index) => (
          <div key={index} className="result-grid-item">
            <a href="/detail">
              <img
                src={img}
                alt={`Post ${index + 1}`}
                className="result-grid-image"
              />
            </a>
            <button
              onClick={() => openModal(img)}
              className="result-download-button"
            >
              <span class="material-icons-round">save_alt</span>
            </button>
          </div>
        ))}
      </div>

      <Modal open={isModalOpen} onCancel={closeModal} footer={null} centered>
        <div className="result-modal-content">
          <button className="result-modal-button">Download</button>
          <p className="result-modal-text">Video Without Watermark</p>
          <button className="result-modal-button">Download</button>
          <p className="result-modal-text">Only Sound</p>
        </div>
      </Modal>
    </div>
  );
};

export default ResultPage;
