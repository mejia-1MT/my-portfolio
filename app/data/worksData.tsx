import { Work } from "@/app/types/workTypes";
// Import images
import w0main from "@/public/img/works/jlrcIcon.png";
import w0sub from "@/public/img/works/jlrc1.png";
import w0in from "@/public/img/works/jlrcIn.png";
import w1main from "@/public/img/works/posIcon.png";
import w1sub from "@/public/img/works/pos1.png";
import w1in from "@/public/img/works/posIn.png";
import w2main from "@/public/img/works/elpaIcon.png";
import w2sub from "@/public/img/works/elpa1.png";
import w2in from "@/public/img/works/elpaIn.png";
import w3main from "@/public/img/works/crocIcon.png";
import w3sub from "@/public/img/works/croc1.png";
import w3in from "@/public/img/works/crocIn.png";
import w4main from "@/public/img/works/hackIcon.png";
import w4sub from "@/public/img/works/hack1.png";
import w4in from "@/public/img/works/hackIn.png";
import w5main from "@/public/img/works/inveIcon.png";
import w5sub from "@/public/img/works/inve1.png";
import w5in from "@/public/img/works/inveIn.png";
import w6main from "@/public/img/works/tranIcon.png";
import w6sub from "@/public/img/works/tran1.png";
import w6in from "@/public/img/works/tranIn.png";

// Create an array of works
export const works: Work[] = [
  {
    id: 0,
    img: w0main, // Directly assign the imported image
    subImg: w0sub,
    inImg: w0in,
    title: "JLRC SpeakEZ",
    overview: `An ESL tutor booking platform that allows students to book sessions with tutors, manage materials, and track progress.`,
    description: `JLRC SpeakEZ is a fully integrated platform designed for ESL (English as a Second Language) tutoring. The project was developed with a strong focus on both the frontend and backend. The frontend features dynamic and responsive interfaces for students, tutors, and admins, built using Next.js, TypeScript, and Tailwind CSS. On the backend, it includes admin functionalities such as creating, editing, and deleting tutor accounts and managing educational materials through CRUD operations, ensuring smooth user interactions across the platform.`,
    features: [
      {
        title: "Responsive User Interfaces",
        description: `Developed dynamic, responsive pages for students, tutors, and admins using Next.js, TypeScript, and Tailwind CSS, ensuring seamless access across all devices.`,
      },
      {
        title: "Admin Account Management",
        description: `Managed backend processes for creating, editing, and deleting tutor accounts, giving admin users the flexibility to manage platform content efficiently.`,
      },
      {
        title: "CRUD Operations for Materials",
        description: `Implemented CRUD functionality for managing educational materials that tutors and students can access, streamlining the platform’s content management.`,
      },
      {
        title: "Seamless Integration",
        description: `Ensured smooth interaction between frontend and backend, providing a cohesive and efficient user experience across the platform.`,
      },
    ],
    link: "jlrce-speakez", // You can add a link here
    projectType: "WORK",
    role: "FULL-STACK",
    techStack: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
      "TailwindCSS",
    ],
    start: "November 2024",
    end: "April 2025",
  },
  {
    id: 1,
    img: w1main, // Directly assign the imported image
    subImg: w1sub,
    inImg: w1in,
    title: "SHOT Cafe POS",
    overview: `A POS system that handles orders and sales analytics 
    for a coffee shop.`,
    description: `SHOT Cafe is a fully-featured POS (Point of Sale) 
    system tailored for a coffee shop, designed to manage orders, 
    track sales, and maintain product inventory. The system is 
    built using modern technologies such as React and Tailwind CSS 
    for the intuitive front-end, while the back-end is powered by 
    Prisma, PostgreSQL, and TypeScript for strict-type handling in 
    the back-end. The application supports role-based authentication 
    secured by JWT tokens, ensuring that employees and admins have 
    appropriate access levels. The system also features a detailed 
    sales dashboard using Chart.js for real-time analytics.`,
    features: [
      {
        title: "Dynamic Menu Interface",
        description: `Displays a comprehensive menu for users to 
        easily place orders, showcasing items in an appealing 
        format.`,
      },
      {
        title: "Sales Dashboard",
        description: `Includes a robust dashboard that visualizes 
        sales data using charts, allowing café owners to analyze 
        monthly revenues and compare them to previous periods.`,
      },
      {
        title: "Order Management",
        description: `Provides functionality for managing orders 
        and tracking sales performance, with options to view totals 
        and percentage contributions from different menu items.`,
      },
      {
        title: "Role-Based Login",
        description: `Features a secure authentication system using 
        JWT tokens, allowing staff to access different features based 
        on their roles (e.g., admin or regular staff).`,
      },
    ],

    link: "shot-cafe-pos", // You can add a link here
    projectType: "PERSONAL",
    role: "SOLO",
    techStack: ["React", "TailwindCSS", "PostgresSQL", "Prisma", "TypeScript"],
    start: "July 2024",
    end: "Sept 2024",
  },
  {
    id: 2,
    img: w2main,
    subImg: w2sub,
    inImg: w2in,
    title: "El Paraiso Hotel",
    overview: `An online booking system for managing hotel 
    reservations and administrative records efficiently.`,
    description: `El Paraiso Hotel is a comprehensive hotel booking 
    system designed to streamline the process of reserving rooms, 
    managing bookings, and handling administrative tasks. The project 
    features both a customer-facing booking interface and an 
    administrative dashboard. The system is built using HTML and CSS 
    for the front-end, while PHP and XAMPP with a MySQL database 
    power the backend. The application includes login sessions for 
    both users and administrators, ensuring a secure and efficient 
    experience for all.`,
    features: [
      {
        title: "Room Booking System",
        description: `Allows users to search for and book available 
        hotel rooms, providing detailed descriptions and pricing information 
        for each option.`,
      },
      {
        title: "Reservation Management",
        description: `Features an admin panel that allows hotel staff to 
        manage room availability, reservations, and guest records through 
        a CRUD interface.`,
      },
      {
        title: "User Authentication",
        description: `Implements secure login sessions for both admin and 
        users, ensuring that sensitive information remains protected.`,
      },
      {
        title: "User-Friendly Landing Page",
        description: `Provides a visually appealing landing page that 
        enhances the user experience, making it easy to navigate the site 
        and find booking options.`,
      },
    ],

    link: "el-paraiso-hotel",
    projectType: "SCHOOL",
    role: "SOLO",
    techStack: ["HTML", "CSS", "PHP"],
    start: "June 2022",
    end: "July 2022",
  },
  {
    id: 3,
    img: w3main,
    subImg: w3sub,
    inImg: w3in,
    title: "The Crochet Corner",
    overview: `A crochet blog offering essential tools, downloadable 
    patterns, tutorials, and a comment section.`,
    description: `The Crochet Corner is a blog dedicated to crochet 
    enthusiasts, providing essential resources for both beginners 
    and seasoned crafters. This blog features detailed guides on 
    crochet tools, patterns, and tutorials, offering an interactive 
    and informative experience. Built using HTML, Tailwind CSS, and 
    React, the blog emphasizes user-friendly navigation, aesthetic 
    design, and interactive features such as commenting and 
    newsletter subscriptions through a login system.`,
    features: [
      {
        title: "Comprehensive Tool Information",
        description: `Provides detailed information about essential 
        tools needed for crocheting, guiding users on where to 
        purchase and how to use them.`,
      },
      {
        title: "Downloadable Patterns",
        description: `Offers beautiful crochet patterns for users 
        to download, enabling them to create their own projects 
        with ease.`,
      },
      {
        title: "Embedded Tutorials",
        description: `Integrates tutorials for crafting cute 
        crochet items, enriching the learning experience for 
        users of all skill levels.`,
      },
      {
        title: "User Interaction",
        description: `Includes a login feature for users to 
        leave comments on posts and subscribe to newsletters, 
        fostering a community of crochet enthusiasts.`,
      },
    ],

    link: "the-crochet-corner",
    projectType: "PERSONAL",
    role: "MAIN",
    techStack: ["React", "TailwindCSS"],
    start: "May 2023",
    end: "July 2023",
  },
  {
    id: 4,
    img: w4main,
    subImg: w4sub,
    inImg: w4in,
    title: "Clockium: Time In/Time Out System",
    overview: `System designed to track employee attendance and 
    generate time management reports.`,
    description: `Clockium is a time management system developed to 
    track employee attendance, monitor working hours, and generate 
    attendance reports. The system was created during a team-based 
    project where I contributed as both a UI/UX designer and a 
    front-end developer. My role involved designing the user 
    interface and developing the dashboard using React, Tailwind 
    CSS, and Recharts. I collaborated closely with the back-end 
    team, ensuring proper data flow from the back-end to the 
    front-end, guiding them on where to place the required data. 
    Clockium provides employees and administrators with a seamless 
    experience for time tracking and attendance management.`,
    features: [
      {
        title: "Employee Attendance Tracking",
        description: `Efficiently tracks employee time-in and 
        time-out records, providing an accurate overview of 
        attendance for payroll and management.`,
      },
      {
        title: "Dashboard Insights",
        description: `Displays key statistics related to 
        attendance, allowing management to identify trends 
        and ensure employee accountability.`,
      },
      {
        title: "Collaboration with Backend",
        description: `Worked closely with backend developers 
        to ensure seamless data flow between the front-end 
        interface and the server, optimizing data display.`,
      },
      {
        title: "User-Centric Design",
        description: `The interface is designed to be 
        user-friendly, allowing employees to easily clock in 
        and out while providing management with accessible 
        attendance records.`,
      },
    ],

    link: "clockium",
    projectType: "INTERSHIP",
    role: "UI/UX, FRONT-END",
    techStack: ["Figma", "React", "TailwindCSS"],
    start: "July 2023",
    end: "Oct 2023",
  },
  // {
  //   id: 5,
  //   img: w5main,
  //   subImg: w5sub,
  //   inImg: w5in,
  //   title: "Inventory System",
  //   overview: `An application that manages inventory records,
  //   allowing users to create, read, update, and delete items.`,
  //   description: `The Inventory System is a desktop application
  //   built using Python for managing products, stock levels, and
  //   inventory records. The system allows users to perform basic CRUD
  //   (Create, Read, Update, Delete) operations on inventory data,
  //   helping businesses track and manage their stock efficiently. The
  //   back-end database is powered by SQLite3, ensuring a lightweight
  //   and effective solution for storing inventory records. Your role
  //   focused on implementing functionality for various buttons, which
  //   included fetching and manipulating data from the database as well
  //   as navigating through different sections of the application.`,
  //   features: [
  //     {
  //       title: "CRUD Functionality",
  //       description: `Allows users to create, read, update, and
  //       delete inventory records, enabling effective management
  //       of stock levels and product details.`,
  //     },
  //     {
  //       title: "Database Integration",
  //       description: `Connects with an SQLite3 database to fetch
  //       and display inventory records, ensuring real-time updates
  //       and data integrity.`,
  //     },
  //     {
  //       title: "Intuitive Navigation",
  //       description: `Features clear navigational elements that
  //       guide users through different sections of the application,
  //       enhancing the overall user experience.`,
  //     },
  //     {
  //       title: "Data Validation",
  //       description: `Implements checks to ensure data accuracy
  //       before performing CRUD operations, preventing errors and
  //       maintaining consistency in inventory records.`,
  //     },
  //   ],

  //   link: "inventory-system",
  //   projectType: "SCHOOL",
  //   role: "BACK-END",
  //   techStack: ["Python", "SQLite3", "Matplotlib"],
  //   start: "Feb 2023",
  //   end: "Feb 2023",
  // },
  // {
  //   id: 6,
  //   img: w6main,
  //   subImg: w6sub,
  //   inImg: w6in,
  //   title: "Tagalog-to-Baybayin Translator",
  //   overview: `A tool that translates Tagalog text into Baybayin
  //   script for easy reading and understanding.`,
  //   description: `This project is a Python-based translator that
  //   converts modern Tagalog text into the ancient Filipino script,
  //   Baybayin. The core functionality lies in a custom algorithm
  //   designed to dissect and translate Tagalog syllables into their
  //   corresponding Baybayin characters. The user interface (UI) is
  //   built using tkinter, providing a simple and interactive
  //   experience for users to input and see translations in real time.`,
  //   features: [
  //     {
  //       title: "Translation Functionality",
  //       description: `The application accurately translates Tagalog
  //       text into Baybayin script, allowing users to convert their
  //       written words into a culturally significant form of writing.`,
  //     },
  //     {
  //       title: "Mapping File",
  //       description: `Utilizes a comprehensive mapping file that
  //       links Tagalog words to their corresponding Baybayin characters,
  //       ensuring high accuracy in translations.`,
  //     },
  //     {
  //       title: "User-Friendly Interface",
  //       description: `Features a simple and intuitive user interface
  //       built with Tkinter, allowing users to easily input Tagalog
  //       text and view the translated output seamlessly.`,
  //     },
  //   ],

  //   link: "tagalog-to-baybayin-translator",
  //   projectType: "SCHOOL",
  //   role: "MAIN",
  //   techStack: ["React", "TailwindCSS", "PostgresSQL", "Prisma", "TypeScript"],
  //   start: "July 2023",
  //   end: "July 2023",
  // },
];
