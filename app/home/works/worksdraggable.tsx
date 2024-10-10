"use client"; // Mark this component as a client component
import React, { useRef, useState } from "react";
import styles from "./worksdraggable.module.css";
import { Work } from "@/app/types/workTypes";
import Arrow from "@/public/svg/arrow-right-02-stroke-rounded";
import Link from "next/link";

interface Props {
  works: Work[];
}

const WorksDraggable = ({ works }: Props) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const scrollLeft = useRef<number>(0);
  const [dragging, setDragging] = useState<boolean>(false); // State to track dragging
  const [dragged, setDragged] = useState<boolean>(false); // State to track if a drag occurred

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (scrollRef.current) {
      isDragging.current = true;
      startX.current = event.pageX - scrollRef.current.offsetLeft; // Record the initial click position relative to the container
      scrollLeft.current = scrollRef.current.scrollLeft; // Get the current scroll position
      setDragging(true); // Set dragging to true
      setDragged(false); // Reset dragged state
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false; // Reset dragging state
    setDragging(false); // Set dragging to false
  };

  const handleMouseUp = () => {
    isDragging.current = false; // Reset dragging state
    setDragging(false); // Set dragging to false
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging.current && scrollRef.current) {
      event.preventDefault(); // Prevent default dragging behavior
      const x = event.pageX - scrollRef.current.offsetLeft; // Calculate the current mouse position
      const walk = x - startX.current; // Calculate how far the mouse has moved
      scrollRef.current.scrollLeft = scrollLeft.current - walk; // Update the scroll position directly
      setDragged(true); // Set dragged state to true
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (dragged) {
      event.preventDefault(); // Prevent click event if dragging occurred
    }
  };

  return (
    <div
      className={`${styles.container} ${
        dragging ? styles.grabbing : styles.grab
      } px-5 lg:px-20  pb-[250px] lg:pb-[300px] `} // Add dragging class for preview effect
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {works.slice(0, 3).map((work, index) => (
        <Link
          href={`works/${work.link}`}
          key={index}
          className={`${
            styles.content
          } w-[80%] lg:w-[50%] mr-5 shrink-0 relative ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          } `} // Main div
          onClick={handleClick} // Attach click handler
        >
          <div className={`w-full aspect-[4/3] relative overflow-hidden`}>
            <div
              className={`${styles.image} w-full h-full bg-cover bg-center transition-transform duration-300`}
              style={{ backgroundImage: `url(${work.img.src})` }}
            />
            <div className="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-primary to-transparent"></div>
          </div>
          <div
            className={`h-[25%] w-full z-10 bg-primary p-2 text-white ${styles.textContainer}`}
          >
            <p className="text-[#696969] font-bold">{work.projectType}</p>
            <div className="flex text-tak text-3xl items-center mb-3">
              <p>{work.title}</p>
              <Arrow className={styles.arrow} />
            </div>
            <p className="mt-3 text-[#dddddd] text-sm md:text-base">
              {work.overview}
            </p>
          </div>
        </Link>
      ))}
      <Link
        href="/works"
        className="w-[80%] lg:w-[50%] aspect-[4/3] mr-5 bg-[#141414] shrink-0 relative overflow-hidden"
      >
        <div className={`flex items-center h-[100%] ${styles.more}`}>
          <div className="text-xl text-center mx-32">
            Explore more about this and other of my projects
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorksDraggable;
