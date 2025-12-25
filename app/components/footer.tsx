"use client";

import Link from "next/link";
import Linkedin from "@/public/svg/linkedin-02-stroke-rounded";
import Resume from "@/public/svg/license-stroke-rounded";

const Footer = () => {
  return (
    <div className="h-[300px] lg:h-[500px] w-full fixed bottom-0 z-[-1] bg-[#141414] text-white flex items-center justify-center ">
      <h4 className="text-5xl md:text-9xl opacity-60">Get Connected</h4>
      <h6 className="absolute bottom-5 lg:bottom-12 lg:left-20 left-8 text-[hsl(0,0%,90%)]">
        Updated: December 2025
      </h6>
      <div className="flex space-x-4 absolute bottom-3 lg:bottom-12 lg:right-20 right-8">
        <div
          className="h-11 aspect-square rounded-full custom-outline outline-[#696969] flex items-center justify-center hover:text-tak hover:outline-tak group"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/juan-paulo-mejia-857953282/",
              "_blank"
            )
          }
        >
          <Linkedin className="text-[hsl(0,0%,90%)] cursor-pointer group-hover:text-tak w-[60%]" />
        </div>
        <Link
          href="./Resumé.pdf" // Directly referencing the public path
          target="_blank"
          rel="noopener noreferrer"
          className="h-11 aspect-square rounded-full custom-outline outline-[#696969] flex items-center justify-center hover:text-tak hover:outline-tak group"
        >
          <Resume className="text-[hsl(0,0%,90%)] cursor-pointer group-hover:text-tak w-[60%]" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
