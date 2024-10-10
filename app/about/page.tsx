import React from "react";
import Bio from "@/app/about/bio/bio";
import Resume from "@/app/about/resume/resume";
import Slideshow from "./slideshow";

const About = () => {
  return (
    <main className="bg-primary ">
      <Slideshow />
      <Bio />
      <Resume />
    </main>
  );
};

export default About;
