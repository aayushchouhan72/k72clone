import React, { useRef } from "react";
import Image1 from "../assets/Images/image-1.jpg";
import Image2 from "../assets/Images/image-2.jpg";
import Image3 from "../assets/Images/image-3.jpg";
import Image4 from "../assets/Images/image-4.jpg";
import Image5 from "../assets/Images/image-5.jpg";
import Image6 from "../assets/Images/image-6.jpg";
import Image7 from "../assets/Images/image-7.jpg";
import Image8 from "../assets/Images/image-8.jpg";
import Image9 from "../assets/Images/image-9.jpg";
import Image10 from "../assets/Images/image-10.jpg";
import Image11 from "../assets/Images/image-11.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Agence = () => {
  const pinRef = useRef(null);
  const ImageRef = useRef(null);

  const imageArray = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
  ];

  useGSAP(() => {
    gsap.to(pinRef.current, {
      scrollTrigger: {
        trigger: pinRef.current,
        markers: true,
        start: "top 28%",
        end: "top -100%",
        pin: true,
        onUpdate: (ele) => {
          const imageIndex = Math.floor(ele.progress * imageArray.length);
          ImageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <>
      <div className="section1 min-h-screen w-full bg-black text-white overflow-x-hidden relative">
        {/* Center Image Wrapper (ref yaha pe hoga) */}
        <div className="absolute inset-x-0 top-24 flex justify-center z-10">
          <div
            ref={pinRef}
            className="rounded-4xl overflow-hidden w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 shadow-xl"
          >
            <img
              ref={ImageRef}
              src={Image1}
              alt="center"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* rest of content */}
        <div className="container mx-auto px-6 pt-64 md:pt-80 relative z-20">
          <div className="font-[font2]">
            <h1 className="text-[17vw] md:text-[8vw] lg:text-[6vw] text-center uppercase leading-none">
              SEVEN7YTWO
            </h1>

            <div className="flex justify-end mt-10">
              <p className="max-w-2xl text-xl leading-relaxed text-right">
                We’re inquisitive and open-minded, and we make sure creativity
                crowds out ego from every corner. A brand is a living thing,
                with values, a personality and a story. If we ignore that, we
                can achieve short-term success, but not influence that goes the
                distance. We bring that perspective to every brand story we help
                tell.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section2 min-h-screen bg-white"></div>
    </>
  );
};

export default Agence;
