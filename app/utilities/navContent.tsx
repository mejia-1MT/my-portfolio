import "@/app/styles/navigation.css";
import Linkedin from "@/public/svg/linkedin-02-stroke-rounded";
import Facebook from "@/public/svg/facebook-02-stroke-rounded";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface DestinationProps {
  word: string;
  font: string;
}

interface NavContentProps {
  isOpen: boolean;
  onClose: () => void;
}

const Destination: React.FC<DestinationProps> = ({ word, font }) => {
  const quantity = word.length;

  const fontStyle =
    font === "special" ? "Poiret One, cursive" : "Raleway, sans-serif";

  return (
    <ul
      style={
        {
          "--time": ".4s",
          "--quantity": quantity,
          fontFamily: fontStyle,
        } as React.CSSProperties
      }
      className="flex ml-3"
    >
      {Array.from({ length: quantity }, (_, index) => (
        <li
          key={index}
          style={{ "--index": `${index + 1}` } as React.CSSProperties}
          // Apply animation class
        >
          {word[index]}
        </li>
      ))}
    </ul>
  );
};

const NavContent: React.FC<NavContentProps> = ({ isOpen, onClose }) => {
  const [animateDestinations, setAnimateDestinations] = useState(false);

  useEffect(() => {
    // Trigger animation when isOpen changes
    if (isOpen) {
      setAnimateDestinations(true);
    } else {
      setAnimateDestinations(false);
    }
  }, [isOpen]);

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
    <div
      className={`fixed inset-0 bg-primary text-[#696969] flex flex-col md:flex-row z-30 pl-5 ${
        isOpen ? "slide-down" : "slide-up"
      }`}
    >
      <div className="flex flex-col md:w-[70%] md:pl-[10%] font-light">
        <Link
          href="/"
          className={`destination overflow-hidden flex mt-24 my-3 h-[5rem] md:h-[7rem]`}
          onClick={onClose}
        >
          <p className="text-xl">01</p>
          <div
            className={`w-full ${animateDestinations ? "go-up" : "go-down"}`}
          >
            <Destination word={"Home"} font={"special"} />
            <Destination word={"Home"} font={"normal"} />
          </div>
        </Link>
        <Link
          href="/works"
          className={`destination overflow-hidden flex my-3 h-[5rem] md:h-[7rem]`}
          onClick={onClose}
        >
          <p className="text-xl">02</p>
          <div
            className={`w-full ${animateDestinations ? "go-up" : "go-down"}`}
          >
            <Destination word={"Works"} font={"special"} />
            <Destination word={"Works"} font={"normal"} />
          </div>
        </Link>
        <Link
          href="/about"
          className={`destination overflow-hidden flex my-3 h-[5rem] md:h-[7rem]`}
          onClick={onClose}
        >
          <p className="text-xl">03</p>
          <div
            className={`w-full ${animateDestinations ? "go-up" : "go-down"}`}
          >
            <Destination word={"About"} font={"special"} />
            <Destination word={"About"} font={"normal"} />
          </div>
        </Link>
      </div>
      <div className="mt-10 flex items-center mb-5 md:flex-1 ">
        <div className="space-y-5">
          <div className="overflow-hidden">
            <div
              className={`p-1 ${animateDestinations ? "go-up" : "go-down"}`}
              style={
                {
                  "--translate": "200px",
                  "--time": "2.5s",
                } as React.CSSProperties
              }
            >
              <p>Get in touch</p>
              <u
                className="cursor-pointer text-white mt-2 hover:text-tak"
                onClick={handleMailClick}
              >
                <p>Send an email</p>
              </u>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className={`p-1 ${animateDestinations ? "go-up" : "go-down"}`}
              style={
                {
                  "--translate": "200px",
                  "--time": "2.5s",
                } as React.CSSProperties
              }
            >
              <p> More about me in socials </p>
              <div className="flex space-x-4 mt-2">
                <div className="w-10 h-10 fill-white custom-outline flex justify-center items-center rounded-full hover:bg-[#ffffff0f] hover:outline-tak group">
                  <Linkedin
                    className="text-[#696969] cursor-pointer group-hover:text-tak"
                    onClick={() =>
                      handleSocialClick(
                        "https://www.linkedin.com/in/juan-paulo-mejia-857953282/"
                      )
                    }
                  />
                </div>
                <div className="w-10 h-10 fill-white custom-outline flex justify-center items-center rounded-full hover:bg-[#ffffff0f] hover:outline-tak group">
                  <Facebook
                    className="text-[#696969] cursor-pointer group-hover:text-tak"
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
    </div>
  );
};

export default NavContent;
