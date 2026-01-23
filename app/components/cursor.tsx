"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type CursorType = "Default" | "View" | "Drag" | "Open";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState<CursorType>("Default");

  // Target
  const mouse = useRef({ x: 0, y: 0 });
  // Current
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Update mouse target
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverTarget = target.closest<HTMLElement>("[data-cursor]");
      if (hoverTarget) {
        setVisible(true);
        const cursorType = hoverTarget.getAttribute(
          "data-cursor"
        ) as CursorType;
        setType(cursorType || "Default");
      } else {
        setVisible(false);
        setType("Default");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleHover);
    document.addEventListener("mouseout", handleHover);

    // Animation loop
    let animationFrame: number;
    const animate = () => {
      const speed = 1; // ADJUSTABLE
      pos.current.x += (mouse.current.x - pos.current.x) * speed;
      pos.current.y += (mouse.current.y - pos.current.y) * speed;

      cursor.style.transform = `translate(${pos.current.x}px, ${
        pos.current.y
      }px) translate(-50%, -50%) ${visible ? "scale(1.5)" : "scale(1)"}`;

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseout", handleHover);
      cancelAnimationFrame(animationFrame);
    };
  }, [mounted, visible]);

  if (!mounted) return null;

  return createPortal(
    <div
      ref={cursorRef}
      className={`
        pointer-events-none fixed left-0 top-0 z-[9999]
        w-[3.5vw] aspect-square rounded-full bg-tak
        opacity-0 transition-all duration-300 ease-out
        flex items-center justify-center text-xs
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      <h6>{type !== "Default" ? type : null}</h6>
    </div>,
    document.getElementById("cursor-root")!
  );
}
