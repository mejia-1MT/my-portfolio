import React from "react";
import styles from "./works.module.css";
import WorksDraggable from "./worksdraggable";
import { works } from "@/app/data/worksData"; // Import the works data

const Works = () => {
  return (
    <section className="mt-60 bg-primary">
      <div className={`${styles.floatAnimation} mt-10 `}>
        <h6 className="text-center text-2xl lg:text-5xl">SIGNIFICANT WORKS</h6>
      </div>
      {/* Pass works data to the client component */}
      <WorksDraggable works={works} />
    </section>
  );
};

export default Works;
