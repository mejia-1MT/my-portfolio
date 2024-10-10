import React from "react";
import styles from "@/app/about/resume/resume.module.css";

const Resume = () => {
  const experienceContent = [
    {
      company: "APPEN",
      role: "Content Moderator",
      description: `Assessed Facebook content for authenticity 
      as a Social Media Evaluator in Project Uolo, conducting 
      in-depth research to identify misinformation and analyzing 
      its potential impact on public safety and public opinion.`,
    },
    {
      company: "HACKTIV",
      role: "Web Programmer",
      description: `Developed the Clockium application, 
      a user-friendly time management tool, by collaborating 
      with cross-functional teams to enhance productivity 
      and streamline functionalities.`,
    },
  ];

  const techContent = {
    skills: [
      "JavaScript",
      "React",
      "NextJS",
      "TypeScript",
      "CSS",
      "HTML",
      "PostgreSQL",
      "PHP",
    ],
  };

  const keyContent = {
    skills: [
      "Critical Thinking",
      "Communication Skills",
      "Problem Solving",
      "Tenacious",
      "Adaptive",
      "Easily Taught",
      "Team Player",
      "Sociable",
    ],
  };

  const educationContent = [
    {
      school: "POLYTECHNIC UNIVERSITY OF THE PHILIPPINES",
      program: "BS: Computer Science",
      date: "2020-2024",
    },
  ];

  return (
    <div
      className={`${styles.scaleAni} bg-tak text-primary px-10 lg:px-0 pb-[100px] lg:pb-[150px]`}
    >
      <div className="flex items-center pb-5 pt-5 pl-0 lg:pb-20 lg:pt-5 lg:pl-5">
        <div className="h-2 aspect-square rounded-full bg-primary mx-2"></div>
        <p>Resumé</p>
      </div>
      {/* Experience Section */}
      <div className="">
        <div className={`${styles.fadeAni} lg:grid grid-cols-2 w-full pb-12 `}>
          <div>
            <h1 className={`${styles.category} lg:ml-[30%]`}>Experience</h1>
          </div>
          <div className="col-start-2">
            {experienceContent.map((cont, index) => (
              <div
                key={index}
                className={`lg:mr-10 ${
                  index < experienceContent.length - 1 ? "" : "pt-5"
                }`}
              >
                <p className={styles.title}>{cont.company}</p>
                <p className={styles.sub}>{cont.role}</p>
                <p className={styles.content}>{cont.description}</p>
                <div
                  className={`${
                    index < experienceContent.length - 1
                      ? "w-full bg-primary h-[1px] mt-5"
                      : "hidden"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className={`${styles.fadeAni} lg:grid grid-cols-2 w-full pb-12`}>
          <div>
            <h1 className={`${styles.category} lg:ml-[30%]`}>
              Technical Skills
            </h1>
          </div>
          <ul className={`${styles.bullet} col-start-2`}>
            {techContent.skills.map((tech, index) => (
              <li key={index} className={styles.content}>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Key Skills Section */}
        <div className={`${styles.fadeAni} lg:grid grid-cols-2 w-full  pb-12`}>
          <div>
            <h1 className={`${styles.category} lg:ml-[30%]`}>Key Skills</h1>
          </div>
          <ul className={`${styles.bullet} col-start-2`}>
            {keyContent.skills.map((key, index) => (
              <li key={index} className={styles.content}>
                {key}
              </li>
            ))}
          </ul>
        </div>

        {/* Education Section */}
        <div className={`${styles.fadeAni} lg:grid grid-cols-2 w-full pb-12`}>
          <div>
            <h1 className={`${styles.category} lg:ml-[30%]`}>Education</h1>
          </div>
          <div className="col-start-2">
            {educationContent.map((educ, index) => (
              <div key={index}>
                <p className={styles.title}>{educ.school}</p>
                <p className={styles.sub}>{educ.program}</p>
                <i className={styles.content}>{educ.date}</i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
