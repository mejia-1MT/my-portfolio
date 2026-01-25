"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/home/hero/hero.module.css";

const AutoType = () => {
  const texts = [
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const colors = ["#F1AFDD", "#FE2C55", "#25F4EE"];
  const [state, setState] = useState({
    text: "",
    i: 0,
    deleting: false,
    idx: 0,
  });
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const speed = 100,
      pause = 1500;

    const interval = setInterval(() => {
      setState((prev) => {
        const fullText = texts[prev.idx];
        if (!prev.deleting) {
          if (prev.text.length < fullText.length)
            return { ...prev, text: fullText.slice(0, prev.text.length + 1) };
          setTimeout(() => setState((p) => ({ ...p, deleting: true })), pause);
          return prev;
        } else {
          if (prev.text.length > 0)
            return { ...prev, text: prev.text.slice(0, -1) };
          return {
            text: "",
            i: 0,
            deleting: false,
            idx: (prev.idx + 1) % texts.length,
          };
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, [texts]);

  useEffect(() => {
    const cursorInterval = setInterval(
      () => setShowCursor((prev) => !prev),
      500
    );
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span
      style={{ color: colors[state.idx] }}
      className="font-bold leading-relaxed shadow-text"
    >
      {state.text}
      <span
        className={styles.cursor}
        style={{ visibility: showCursor ? "visible" : "hidden" }}
      >
        |
      </span>
    </span>
  );
};

export default AutoType;
