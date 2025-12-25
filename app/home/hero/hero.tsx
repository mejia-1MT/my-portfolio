import React from "react";
import styles from "@/app/home/hero/hero.module.css";
import Image from "next/image"; // Import the Image component
import Profile from "@/public/img/profile.jpg";
import AutoType from "@/app/utilities/autoType";
import Arrow from "@/public/svg/arrow-right-02-stroke-rounded"; // Import your SVG file
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className={`${styles.container} mt-[100px] lg:mt-[150px] p-10 items-center lg:grid grid-cols-2 lg:mx-20 lg:gap-[5%] lg:p-0 `}
    >
      <div
        className={`${styles.imageContainer} relative w-full h-full  overflow-hidden flex items-center`}
      >
        <Image
          className="object-cover"
          src={Profile}
          alt="Profile"
          quality={100}
          priority
        />

        {/* <div
          className={`${styles.slide_up} absolute w-full h-full bg-tak`}
        ></div> */}
      </div>
      {/* Introduction */}
      <div
        className={`${styles.introduction} flex flex-col lg:justify-between  lg:h-[80%] my-12 lg:my-0 `}
      >
        <div className="text-3xl lg:text-4xl font-medium tracking-wider leading-loose mt-8  lg:mt-0 h-[200px] md:h-[120px] lg:h-[20%]">
          <p>
            {" "}
            Juan is an up and coming <AutoType />
          </p>
        </div>
        <p className="text-sm lg:text-xl font-extralight text-[#dddddd] tracking-wider leading-loose">
          Fueled by a fascination with the digital landscape. I’ve recently
          received my degree in Computer Science at the PUP, where I’ve honed
          and practiced my skills. Now, I’m eager to turn my passion into a
          profession, ready to create impactful web solutions.
        </p>
        <Link
          href="/about"
          className={` ${styles.getToKnow} mt-10 lg:mt-0 relative `}
        >
          <p className="cursor-pointer">Get to know me more</p>
          <Arrow className={`${styles.arrow}`} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
