import React from "react";
import "@/app/styles/navigation.css";

interface SidebarButtonProps {
  onClick: () => void; // onClick handler
  isOpen: boolean | null; // Indicates whether the button is active
}

const NavButton: React.FC<SidebarButtonProps> = ({ onClick, isOpen }) => {
  // console.log(`is open is ${isOpen}`);
  return (
    <button
      onClick={onClick}
      className={`nav-button hover:bg-[#ffffff0f] rounded-full w-[70px] aspect-square z-50 flex flex-col relative justify-center items-center cursor-pointer  ${
        isOpen ? "open" : ""
      }`}
    >
      <div className="line top " />
      <div className="line bottom " />
    </button>
  );
};

export default NavButton;
