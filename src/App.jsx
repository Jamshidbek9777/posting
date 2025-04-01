import React, { useState } from "react";
import { Drawer } from "antd";
import { ChevronRight, ClipboardCheck, Menu } from "lucide-react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-6">
      {/* Menu Button (Top-Right) */}
      <div className="absolute top-4 right-4">
        <Menu
          className="text-2xl cursor-pointer sm:text-3xl"
          onClick={() => setOpen(true)}
        />
      </div>

      {/* Logo */}
      <h1 className="custom-font text-3xl sm:text-4xl font-bold text-purple-600 mb-6">
        logo
      </h1>

      {/* Input Field */}
      <div className="flex items-center w-full max-w-lg border border-gray-300 rounded-full px-4 py-2 shadow-md">
        <input
          type="text"
          placeholder="Enter video URL"
          className="flex-grow px-2 py-2 text-sm sm:text-base outline-none"
        />
        <div className="flex gap-2">
          <button>
            <ClipboardCheck className="text-gray-400 cursor-pointer w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <a href="/result">
            <button className="bg-purple-600 text-white p-2 rounded-full sm:p-3">
              <ChevronRight className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </a>
        </div>
      </div>

      {/* Additional Info */}
      <div className="w-full max-w-lg mt-4 text-center sm:text-left">
        <div className="flex justify-center sm:justify-start gap-4 text-lg">
          <span className="text-purple-600">● blabla</span>
          <span className="text-gray-400">● blabla</span>
        </div>
        <div className="mt-2">
          <h2 className="font-bold text-lg sm:text-xl">Title</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Description text goes here.
          </p>
        </div>
      </div>

      {/* Ant Design Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <p className="text-base">Menu Item 1</p>
        <p className="text-base">Menu Item 2</p>
      </Drawer>
    </div>
  );
}
