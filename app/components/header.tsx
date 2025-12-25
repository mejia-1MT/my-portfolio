import Link from "next/link";
import React from "react";
import Sidebar from "./sidebar";

function Header() {
  return (
    <div className="fixed w-full top-0 z-20  flex justify-between items-center py-5 pl-10 pr-5 mr-5">
      <Link href="/" className="title ">
        J1
      </Link>
      <Sidebar />
    </div>
  );
}

export default Header;
