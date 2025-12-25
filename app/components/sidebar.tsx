"use client";

import { useState } from "react";
import "@/app/styles/navigation.css";
import NavButton from "@/app/utilities/navButton";
import NavContent from "@/app/utilities/navContent";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false); // Function to close the sidebar
  };

  // useEffect(() => {
  //   const handleEsc = (e) => {
  //     if (e.key === "Escape") setIsOpen(false);
  //   };
  //   document.addEventListener("keydown", handleEsc);
  //   return () => document.removeEventListener("keydown", handleEsc);
  // }, []); // Closes on esc

  return (
    <aside className=" ">
      <NavButton onClick={handleClick} isOpen={isOpen} />
      <NavContent isOpen={isOpen} onClose={handleClose} />
    </aside>
  );
};

export default Sidebar;
