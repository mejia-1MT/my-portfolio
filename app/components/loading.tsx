"use client";

import { useEffect, useState } from "react";
import styles from "./loading.module.css";

const SplashScreenClient = () => {
  const countdown = ["Setting up...", "Three", "Two", "Juan"];
  const [loading, setLoading] = useState(true);
  const [phrase, setPhrase] = useState("Setting up..."); // Set initial phrase
  const [animate, setAnimate] = useState(false); // Track when to start exit animation
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
  };
  const [currentBreakpoint, setCurrentBreakpoint] = useState("sm"); // Set default breakpoint

  // Get the current screen breakpoint
  function getBreakpoint(width: number) {
    if (width < breakpoints.sm) return "sm";
    else if (width >= breakpoints.sm && width < breakpoints.md) return "md";
    else if (width >= breakpoints.md && width < breakpoints.lg) return "lg";
    else return "xl"; // Extra large
  }

  // Initialize current breakpoint on the client side
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newBreakpoint = getBreakpoint(newWidth);
      setCurrentBreakpoint(newBreakpoint);
    };

    // Set the initial breakpoint
    handleResize(); // Set current breakpoint on initial load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle the countdown logic
  useEffect(() => {
    if (!loading) return; // Skip countdown if not loading

    const length = countdown.length;
    let count = 0;

    const countdownProcess = setInterval(() => {
      setPhrase(countdown[count]);
      count++;

      if (count === length) {
        clearInterval(countdownProcess);
        setTimeout(() => {
          setAnimate(true); // Trigger exit animation
          setTimeout(() => setLoading(false), 800); // Wait for animation to complete before hiding splash
        }, 200); // Short delay before starting exit animation
      }
    }, 500);

    return () => clearInterval(countdownProcess); // Cleanup interval
  }, [currentBreakpoint]);

  return loading ? (
    <div
      className={`text-lg lg:text-xl ${styles.load} ${
        animate ? `${styles.aniUp}` : ""
      }`}
    >
      <h1>{phrase}</h1>
    </div>
  ) : null;
};

export default SplashScreenClient;
