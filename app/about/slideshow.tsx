import React from "react";
import Image from "next/image";
import styles from "./slideshow.module.css";

import img1 from "@/public/img/1727688085199.jpg";
import img3 from "@/public/img/IMG_20230430_095322.jpg";
import img4 from "@/public/img/IMG_20230628_150124.jpg";
import img5 from "@/public/img/IMG_20230729_132415_068.jpg";
import img6 from "@/public/img/IMG_20231219_005903_903.jpg";
import img7 from "@/public/img/IMG_20240204_135655_548.jpg";
import img8 from "@/public/img/IMG_20240204_154947_951.jpg";
import img9 from "@/public/img/IMG_20240330_232043_794.jpg";
import img10 from "@/public/img/IMG_20240514_170735_925.jpg";
import img11 from "@/public/img/IMG_20240825_181955_510.jpg";
import img12 from "@/public/img/received_469330805705564.jpeg";
import img13 from "@/public/img/received_899594922220463.jpeg";

const Slideshow = () => {
  const images = [
    { src: img1, top: "0%", left: "76%", width: "w-[23%]" }, //graduate
    { src: img5, top: "6%", left: "12%", width: "w-[27%]" }, //lrt
    { src: img12, top: "21%", left: "0%", width: "w-[23%]" }, //thesis
    { src: img3, top: "19%", left: "68%", width: "w-[21%]" }, //odi
    { src: img10, top: "40%", left: "35%", width: "w-[18%]" }, //cold
    { src: img7, top: "41%", left: "73%", width: "w-[18%]" }, //dani
    { src: img4, top: "56%", left: "4%", width: "w-[17%]" }, //den
    { src: img13, top: "58%", left: "78%", width: "w-[21%]" }, //samgyup
    { src: img9, top: "68%", left: "34%", width: "w-[20%]" }, //bengbeng
    { src: img11, top: "76%", left: "69%", width: "w-[20%]" }, //coffee
    { src: img8, top: "88%", left: "5%", width: "w-[20%]" }, //phone
    { src: img6, top: "89%", left: "55%", width: "w-[20%]" }, //swimming
  ];

  return (
    <section className="h-[1200px] custom-outline outline-white relative overflow-hidden ">
      <div
        className={`${styles.characteristics} text-3xl md:text-6xl z-10 ml-5 lg:ml-20 leading-relaxed`}
      >
        <p className="">SOMEJUAN&apos;s a</p>
        <p>Gamer</p>
        <p>Paw-rent</p>
        <p>DOOM Scroller</p>
      </div>
      <div className={`${styles.slider} hidden lg:block z-10`}>
        <ul>
          <li className={`left-0`}>-ABOUT-</li>
          <li className={`left-[100%]`}>-ABOUT-</li>
        </ul>
      </div>
      <div className="h-[3000px] relative ">
        <div className={`${styles.container} `}>
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute overflow-hidden ${img.width}`}
              style={{ top: img.top, left: img.left }}
            >
              {/* Box for animation */}
              <div
                className={`absolute w-full h-full bg-tak ${styles.slide_up}`}
              ></div>

              {/* Image */}
              <Image
                src={img.src}
                alt={`Scattered Image ${index + 1}`}
                layout="responsive"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
          ))}

          {/* Second set of images */}
          {images.map((img, index) => (
            <div
              key={`duplicate-${index}`} // Ensure unique key for duplicate
              className={`absolute overflow-hidden ${img.width}`}
              style={{ top: `calc(${img.top} + 100%)`, left: img.left }} // Adjust top to +100%
            >
              {/* Box for animation */}
              <div
                className={`absolute w-full h-full bg-tak ${styles.slide_up}`}
              ></div>

              {/* Image */}
              <Image
                src={img.src}
                alt={`Scattered Image ${index + 1}`}
                layout="responsive"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
