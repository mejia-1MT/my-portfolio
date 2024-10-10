"use client";

import { useState } from "react";
import "@/app/styles/navigation.css";
import NavButton from "@/app/utilities/navButton";
import NavContent from "@/app/utilities/navContent";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false); // Function to close the sidebar
  };

  return (
    <aside className=" ">
      <NavButton onClick={handleClick} isOpen={isOpen} />
      <NavContent isOpen={isOpen} onClose={handleClose} />
    </aside>
  );
};

export default Sidebar;
