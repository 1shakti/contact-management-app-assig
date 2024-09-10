import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../../constants/menuItems";
import { FaBars, FaTimes } from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        className={`fixed top-20 left-2 z-50 text-white bg-gray-500 rounded-lg p-2 focus:outline-none transition-transform duration-300 ${
          isOpen ? "translate-x-[250px]" : "translate-x-0"
        }`}
        onClick={handleMenuClick}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div
        className={`fixed top-16 left-0 h-[95vh] bg-white font-bold transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${isOpen ? "w-64" : "w-16"} transition-all duration-300`}
      >
        <div className="flex flex-col h-full">
          <nav className="flex-1 overflow-y-auto p-4">
            {menuItems.map((item) => (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block p-2 text-black rounded ${
                    isActive ? "bg-gray-200" : "hover:bg-gray-200"
                  }`
                }
                key={item.name}
                onClick={handleMenuClick}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
