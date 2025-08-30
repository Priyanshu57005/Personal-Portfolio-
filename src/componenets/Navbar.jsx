import React from "react";
import { FaHome, FaUser, FaLaptopCode, FaProjectDiagram, FaGraduationCap, FaEnvelope } from "react-icons/fa";

export default function SideNavbar() {
  const navLinks = [
    { id: 1, icon: <FaHome />, link: "#home", label: "Home" },
    { id: 2, icon: <FaUser />, link: "#about", label: "About" },
    { id: 3, icon: <FaLaptopCode />, link: "#skills", label: "Skills" },
    { id: 4, icon: <FaProjectDiagram />, link: "#projects", label: "Projects" },
    { id: 5, icon: <FaGraduationCap />, link: "#education", label: "Education" },
    { id: 6, icon: <FaEnvelope />, link: "#contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-5 z-50">
      <div className="flex flex-col items-center bg-white/20 backdrop-blur-md p-3 rounded-2xl shadow-lg space-y-4">
        {navLinks.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="text-black hover:text-purple-600 transition-colors relative group"
          >
            <span className="text-2xl">{item.icon}</span>
            {/* Tooltip */}
            <span
              className="absolute left-[-110%] top-1/2 -translate-y-1/2 
                bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 
                transition-opacity whitespace-nowrap"
            >
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
