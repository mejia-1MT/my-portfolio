import React from "react";
import "@/app/styles/navigation.css";

interface SidebarButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // onClick handler
  isOpen: boolean; // Indicates whether the button is active
}

const NavButton: React.FC<SidebarButtonProps> = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className="nav-button hover:bg-[#ffffff0f] rounded-full w-[70px] aspect-square z-50 flex flex-col relative justify-center items-center cursor-pointer"
    >
      {/* Top line */}
      <div
        className={`absolute w-6 h-[2px] bg-white rounded-lg transition-all  ${
          isOpen ? "animate-go-top" : "animate-top-reverse"
        }`}
      />

      {/* Bottom line */}
      <div
        className={`absolute w-6 h-[2px] bg-white rounded-lg transition-all  ${
          isOpen ? "animate-bot" : "animate-bot-reverse"
        }`}
      />
    </button>
  );
};

export default NavButton;
