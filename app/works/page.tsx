import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Work } from "@/app/types/workTypes";
import { works } from "@/app/data/worksData";
import Arrow from "@/public/svg/arrow-right-02-stroke-rounded";
import styles from "./workItem/workList.module.css";

const WorksPage = () => {
  return (
    <main className={`${styles.main} bg-primary pb-20 pt-20 z-20`}>
      <div className={styles.titleContainer}>
        <h1 className={`${styles.title} ml-[10%]`}>All Projects</h1>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.projectsContainer}>
        {works.map((work: Work, index) => (
          <Link
            href={`works/${work.link}`}
            className={`w-full mb-16 flex ${
              index % 2 === 0 ? "sm:justify-end sm:pr-[20%]" : " sm:pl-[20%]"
            } `}
            key={index}
          >
            {" "}
            <div
              className={`${styles.project}   `}
              style={{ "--index": index } as React.CSSProperties}
            >
              <div className="w-full overflow-hidden">
                {" "}
                <Image
                  src={work.img.src}
                  alt={work.title}
                  width={300}
                  height={300}
                  quality={100}
                  className={`${styles.image}`}
                />
              </div>

              <div className={styles.overlay}>
                <div className={styles.endDate}>
                  <p className={styles.endDateContent}>{work.end}</p>
                </div>
                <div className={styles.arrowContainer}>
                  <Arrow className="w-[60%]" />
                </div>
              </div>
              <div className="p-5 text-xl  md:p-10 tracking-none ">
                <h4 className={`${styles.projectType} `}>{work.projectType}</h4>
                <h3 className={styles.projectTitle}>{work.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default WorksPage;
