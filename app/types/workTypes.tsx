// types/workTypes.ts

import type { StaticImageData } from "next/image"; // Import StaticImageData if you're using it

export interface Work {
  id: number;
  img: StaticImageData; // Change to StaticImageData if using image imports
  subImg: StaticImageData;
  inImg: StaticImageData;
  title: string;
  overview: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  link: string;
  projectType: string;
  role: string;
  techStack: Array<string>;
  start: string;
  end: string;
}
