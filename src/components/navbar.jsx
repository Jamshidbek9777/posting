import { Drawer } from "antd";
import { Search, Menu as MenuIcon } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 py-3 bg-white shadow-md w-full">
      {/* Logo */}
      <a href="/">
        <h1 className="custom-font text-2xl sm:text-3xl font-bold text-purple-600 cursor-pointer">
          logo
        </h1>
      </a>

      {/* Search Input (Hidden on Small Screens) */}
      <div className="hidden sm:flex items-center w-full max-w-md border border-gray-300 rounded-full px-3 py-2 shadow-sm">
        <input
          type="text"
          placeholder="Enter @username"
          className="flex-grow px-2 py-1 text-sm sm:text-base outline-none"
        />
        <button>
          <Search className="text-gray-400 cursor-pointer w-5 h-5" />
        </button>
      </div>

      <div className="p-2 rounded-md cursor-pointer ">
        <MenuIcon
          className="w-7 h-7 text-gray-600"
          onClick={() => setOpen(true)}
        />
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <div className="sm:hidden flex items-center border border-gray-300 rounded-full px-3 py-2 shadow-sm mb-4">
          <input
            type="text"
            placeholder="Enter @username"
            className="flex-grow px-2 py-1 text-sm outline-none"
          />
          <button>
            <Search className="text-gray-400 cursor-pointer w-5 h-5" />
          </button>
        </div>

        <p className="text-lg">Menu Item 1</p>
        <p className="text-lg">Menu Item 2</p>
      </Drawer>
    </div>
  );
};

export default Navbar;
