import React from "react";
import Hero from "@/app/home/hero/hero";
import Works from "./home/works/works";

export default function Home() {
  return (
    <main className="relative text-white  bg-primary z-10">
      <Hero />
      <Works />
    </main>
  );
}
