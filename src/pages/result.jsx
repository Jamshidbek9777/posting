import React, { useState } from "react";
import { Download } from "lucide-react";
import { Modal, Button } from "antd";

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
    <div className="bg-black min-h-screen text-white flex flex-col items-center p-4">
      {/* Profile Info */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="/img/image1.jpeg"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover border-2 border-gray-600"
        />
        <h2 className="text-xl font-semibold mt-2">@username</h2>
        <p className="text-gray-400">8 POSTS</p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-5xl">
        {images.map((img, index) => (
          <div key={index} className="relative">
            <a href="/detail">
              <img
                src={img}
                alt={`Post ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            </a>
            <button
              onClick={() => openModal(img)}
              className="absolute bottom-2 right-2 bg-purple-600 p-2 rounded-full"
            >
              <Download />
            </button>
          </div>
        ))}
      </div>

      <Modal open={isModalOpen} onCancel={closeModal} footer={null} centered>
        <div className="flex flex-col gap-4 items-center mt-4">
          <button className="bg-purple-600 px-6 py-2 rounded-lg text-white text-lg">
            Download
          </button>
          <p className="text-lg">Video Without Watermark</p>
          <button className="bg-purple-600 px-6 py-2 rounded-lg text-white text-lg">
            Download
          </button>
          <p className="text-lg">Only Sound</p>
        </div>
      </Modal>
    </div>
  );
};

export default ResultPage;
