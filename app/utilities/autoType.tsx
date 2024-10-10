"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/home/hero/hero.module.css";

const AutoType = () => {
  const texts = [
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ]; // Define a list of texts to cycle through

  const colors = [
    "#F1AFDD", // Color for "Full-Stack Developer"
    "#FE2C55", // Color for "Frontend Developer"
    "#25F4EE", // Color for "Backend Developer"
  ];

  const [displayedText, setDisplayedText] = useState(""); // Initialize empty string
  const [index, setIndex] = useState(0); // Index to track current character
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // Index to track the current string in the array
  const [reverse, setReverse] = useState(false); // Track if we are deleting text
  const [showCursor, setShowCursor] = useState(true); // Track cursor visibility
  const [isTyping, setIsTyping] = useState(false); // Track if typing has started

  useEffect(() => {
    const startTypingDelay = setTimeout(() => {
      setIsTyping(true); // Start typing after a delay
    }, 1500); // Adjust this value for the desired delay in milliseconds (2000ms = 2 seconds)

    return () => clearTimeout(startTypingDelay); // Cleanup timeout on unmount
  }, []); // Run this effect only once

  useEffect(() => {
    if (!isTyping) return; // Don't run the typing effect until isTyping is true

    const timeout = setTimeout(() => {
      if (!reverse && index < texts[currentTextIndex].length) {
        setDisplayedText((prev) => prev + texts[currentTextIndex][index]); // Append next character
        setIndex(index + 1); // Increment index
      } else if (reverse && index > 0) {
        setDisplayedText((prev) => prev.slice(0, -1)); // Remove the last character
        setIndex(index - 1); // Decrement index
      } else if (index === texts[currentTextIndex].length) {
        // Add a delay before starting to reverse
        const delayReverse = setTimeout(() => {
          setReverse(true); // Start reversing after delay
        }, 2000); // 3 seconds delay before reversing

        return () => clearTimeout(delayReverse); // Cleanup delay
      } else if (index === 0 && reverse) {
        // Move to the next string after completing the current one
        setReverse(false); // Reset reverse to start typing again
        setCurrentTextIndex((prev) => (prev + 1) % texts.length); // Move to the next text in the array
        setIndex(0); // Reset the index for the new string
      }
    }, 100); // Delay in milliseconds between each character

    return () => clearTimeout(timeout); // Clear timeout if component unmounts
  }, [index, reverse, currentTextIndex, texts, isTyping]); // Re-run effect when `index`, `reverse`, or `currentTextIndex` changes

  useEffect(() => {
    const cursorTimeout = setInterval(() => {
      setShowCursor((prev) => !prev); // Toggle cursor visibility
    }, 500); // Blink every 500ms

    return () => clearInterval(cursorTimeout); // Cleanup interval on unmount
  }, []); // Run this effect only once

  return (
    <span
      className="font-bold leading-relaxed shadow-text"
      style={{ color: colors[currentTextIndex] }} // Change text color based on current index
    >
      {displayedText}
      <span
        className={styles.cursor}
        style={{ visibility: showCursor ? "visible" : "hidden" }}
      >
        | {/* Blinking cursor */}
      </span>
    </span>
  );
};

export default AutoType;
