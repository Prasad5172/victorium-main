import React, { useEffect, useRef } from "react";

function AboutSection() {
   
  return (
    <section
      id="research"
      className="grid grid-cols-1 md:grid-cols-1 text-center md:text-center w-full gap-20 md:gap-32 my-24 md:my-32 px-12 md:px-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16  overflow-hidden">
        <div className="text-center lg:text-left md:text-left order-2 md:order-none" >
          <h2 className="text-[40px] dark:text-white capitalize leading-[48px] font-bold">Introduction</h2>
          <p className="my-4 text-center text-[15.5px] tracking-lighter lg:text-left lg:text-[15.5px] mt-6 lg:tracking-lighter text-[#111920] dark:text-white">
            Dive into a worldCarosel where technology enhances life and work in unimaginable ways. At Victoriam,
            we're passionate about creating AI solutions that are not just advanced, but also intuitive and
            tailored to meet the evolving needs of our world.
          </p>
        </div>
        <div style={{ height: "290px", width: "100%" }} className="md:order-none overflow-hidden" >
          <img style={{ height: "100%", width: "100%" }} className="rounded-md" src="/about-1.jpg" />
        </div>
        <div style={{ height: "290px", width: "100%" }} className="order-3 md:order-none overflow-hidden" >
          <img style={{ height: "100%", width: "100%" }} className="rounded-md" src="/about-2.jpg" />
        </div>
        <div className="text-center lg:text-left md:text-left order-4 md:order-none" >
          <h2 className="text-[40px] dark:text-white capitalize leading-[48px] font-bold">Our Ambition Is Simple</h2>
          <p className="my-4 text-center text-[15.5px] tracking-lighter lg:text-left lg:text-[15.5px] mt-6 lg:tracking-lighter text-[#111920] dark:text-white">
            To integrate AI into everyday life, making it more efficient, creative, and enjoyable. We envision a
            future where our innovations serve as the backbone for this transformation, accessible to all.
          </p>
        </div>
        <div className="text-center lg:text-left md:text-left order-6 md:order-none" >
          <h2 className="text-[40px] dark:text-white capitalize leading-[48px] font-bold">Our Journey</h2>
          <p className="my-4 text-center text-[15.5px] tracking-lighter lg:text-left lg:text-[15.5px] mt-6 lg:tracking-lighter text-[#111920] dark:text-white">
            From a spark of inspiration to a beacon of innovation, Victoriam has always been driven by the potential
            of AI to change the world. Our journey is marked by a commitment to excellence, curiosity, and a deep
            desire to make a positive impact.
          </p>
        </div>
        <div style={{ height: "290px", width: "100%" }} className="order-5 md:order-none overflow-hidden">
          <img style={{ height: "100%", width: "100%" }} className="rounded-md" src="/about-3.jpg" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
