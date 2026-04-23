import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/myprojects", label: "My Projects" },
  ];

  return (
    <div className="shadow bg-white">
      <nav className="fixed top-0 left-0 w-full z-40 shadow bg-white font-medium">
        <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4">
          {/* Left: Logo */}
          <Link to="/">
            <h1 className="text-xl font-bold text-black">Blogger</h1>
          </Link>

          {/* Center: Links */}
          <div className="hidden sm:flex flex-1 justify-center items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md transition ${
                  location.pathname === link.path
                    ? "bg-black text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <Bars3Icon
            className="w-8 sm:hidden cursor-pointer text-gray-700"
            onClick={() => setSidebarOpen(true)}
          />
        </div>

        {/* Mobile Sidebar Menu */}
        <div
          className={`sm:hidden fixed top-0 right-0 bottom-0 bg-white shadow transition-all duration-300 z-999 ${
            sidebarOpen ? "w-64 p-6" : "w-0 overflow-hidden"
          }`}
        >
          <XMarkIcon
            className="w-6 absolute right-4 top-4 cursor-pointer text-black"
            onClick={() => setSidebarOpen(false)}
          />

          <div className="flex flex-col mt-12 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setSidebarOpen(false)}
                className={`block px-4 py-2 rounded-md text-black ${
                  location.pathname === link.path
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;