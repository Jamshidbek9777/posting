import React from "react";

const Detail = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-4 text-white">
      <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        <div className="flex items-center p-4">
          <img
            src="/path-to-profile.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border-2 border-gray-600"
          />
          <div className="ml-3">
            <h2 className="text-sm font-semibold">username</h2>
            <p className="text-xs text-gray-400">2 hours ago</p>
          </div>
        </div>

        <div className="relative">
          <video
            controls
            className="w-full h-auto rounded-lg"
            src="/vid/sample-vid.mp4"
          ></video>
        </div>
      </div>

      <div className="mt-4 space-y-3 w-full max-w-lg">
        <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
          <span>Video without watermark</span>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold">
            Download
          </button>
        </div>
        <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
          <span>Only sound</span>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
