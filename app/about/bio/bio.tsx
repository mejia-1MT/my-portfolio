import React from "react";
import styles from "./bio.module.css";

const Bio = () => {
  return (
    <section className="px-10 lg:px-0 cursor-default">
      <div className="flex items-center pb-5 pt-5 pl-0 lg:pb-20 lg:pt-5 lg:pl-5">
        <div className="h-2 aspect-square rounded-full bg-tak mx-2"></div>
        <p className="text-tak">Bio</p>
      </div>
      <div
        className={`${styles.slideAni} lg:grid grid-cols-4 w-full text-sm md:text-[1.25rem] md:pr-10 pb-20 md:px-10 `}
      >
        <p className="col-start-2 col-span-3 text-blue tracking-wide leading-10">
          Born and raised in Antipolo, I recently completed my degree in
          Computer Science in Polytechnic University of the Philippines gaining
          an adequate foundation in full-stack development through coursework
          and personal projects. Though I’m new to the professional field, I’m
          eager to apply my skills and continue learning.
        </p>
        <p className="col-start-2 col-span-3 pt-5 tracking-wide leading-10">
          In my spare time, I enjoy gaming and browsing social media, staying
          updated on the latest trends. These hobbies fuel my creativity and
          keep me connected to digital innovation, which I bring into my
          approach to development.
        </p>
      </div>
    </section>
  );
};

export default Bio;
