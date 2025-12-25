import "@/app/styles/navigation.css";
import Linkedin from "@/public/svg/linkedin-02-stroke-rounded";
import Facebook from "@/public/svg/facebook-02-stroke-rounded";
// import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/header";

interface NavContentProps {
  isOpen: boolean | null;
  onClose: () => void;
}

const NavContent: React.FC<NavContentProps> = ({ isOpen, onClose }) => {
  const handleMailClick = () => {
    const email = "mejiapaulo13gmail.com"; // Replace with your email
    const subject = "Hello Juan!"; // Replace with your subject
    const body = "I would like to get in touch."; // Replace with your email body
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank"); // Opens Gmail in a new tab
  };

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    // <div
    //   className={`absolute inset-0 nav-content-open bg-primary h-screen overflow-hidden text-[#696969] flex flex-col   z-30  ${
    //     isOpen === true ? " open" : ""
    //   }`}
    <div
      className={`fixed inset-0 nav-content bg-primary h-screen overflow-hidden text-[#696969] flex flex-col  justify-between z-30 px-10  ${
        isOpen === true ? " open" : ""
      }`}
    >
      {/* Title  */}
      <div className=" w-full z-20  flex justify-between items-center py-5  ">
        <Link href="/" className="title hover:text-white " onClick={onClose}>
          J1
        </Link>
        <div className="w-[70px] aspect-square"></div>
      </div>

      {/* Links */}
      <div className="flex flex-col  md:w-[70%]  font-light ">
        <Link
          href="/"
          className={`destination group overflow-hidden flex  my-3  h-[5rem] lg:h-[6rem] hover:text-white`}
          onClick={onClose}
        >
          <p className="text-xl">01</p>
          <div className="shadow-before-hover font- ml-5 ">Home</div>
        </Link>
        <Link
          href="/works"
          className={`destination group overflow-hidden flex  my-3 h-[5rem] lg:h-[6rem] hover:text-white`}
          onClick={onClose}
        >
          <p className="text-xl">02</p>
          <div className="shadow-before-hover ml-5 ">Works</div>
        </Link>
        <Link
          href="/about"
          className={`destination group overflow-hidden flex  my-3  h-[5rem] lg:h-[6rem] hover:text-white`}
          onClick={onClose}
        >
          <p className="text-xl">03</p>
          <div className="shadow-before-hover ml-5 ">About</div>
        </Link>
      </div>

      {/* Socials */}
      <div className="flex items-center py-5">
        <div className="space-y-5">
          <div className="overflow-hidden">
            <p>Get in touch</p>
            <u
              className="cursor-pointer text-white mt-2 hover:text-tak"
              onClick={handleMailClick}
            >
              <p>Send an email</p>
            </u>
          </div>

          <div className="overflow-hidden m-[-1px]">
            <p> More about me in socials </p>
            <div className="flex space-x-4 m-[1px]">
              <div className="w-10 h-10 fill-white custom-outline text-white flex justify-center items-center rounded-full hover:bg-[#ffffff0f] hover:outline-tak group">
                <Linkedin
                  className="text-white cursor-pointer group-hover:text-tak"
                  onClick={() =>
                    handleSocialClick(
                      "https://www.linkedin.com/in/juan-paulo-mejia-857953282/"
                    )
                  }
                />
              </div>
              <div className="w-10 h-10 fill-white custom-outline text-white flex justify-center items-center rounded-full hover:bg-[#ffffff0f] hover:outline-tak group">
                <Facebook
                  className="text-white cursor-pointer group-hover:text-tak"
                  onClick={() =>
                    handleSocialClick("https://www.facebook.com/s0mejuan")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavContent;
