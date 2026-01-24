import React from "react";
import styles from "./workItem.module.css";
import { Work } from "@/app/types/workTypes";
import Image from "next/image";
import Arrow from "@/public/svg/arrow-right-02-stroke-rounded";

interface WorkItemProps {
  work: Work;
  index: number;
}
const WorkItem: React.FC<WorkItemProps> = ({ work, index }) => {
  return (
    <section className={`w-screen bg-blue-500 ${index % 2 === 0 ? "" : ""}`}>
      <div
        className={` max-w-[450px] min-w-[280px] pb-10 relative`}
      
      >
        <Image
          src={work.inImg.src}
          alt={work.title}
          width={100}
          height={100}
          quality={100}
          className=""
        />
        <div>
          <h1 className={`text-6xl `}>{work.title}</h1>
        </div>
        <div className={`${styles.end}`}>
          <div className={`${styles.endContent}`}> {work.end}</div>
        </div>
        <div className={`${styles.button} bg-pink-500 z-20`}>
          <Arrow className={`${styles.arrow}`} />
        </div>
      </div>
    </section>
  );
};

export default WorkItem;
