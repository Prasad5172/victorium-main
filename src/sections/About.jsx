import Button from "../components/Button";

function AboutSection() {
  return (
    <section
      id="research"
      className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-center md:text-left w-full gap-20 md:gap-32 my-24 md:my-32 px-12 md:px-32"
    >
      <div className="text-left order-2 md:order-none">
        <h2 className="text-[40px] dark:text-white capitalize leading-[48px] font-bold">
          Introduction
        </h2>
        <p className="my-4 text-left text-[13.5px] tracking-lighter lg:text-lighter lg:text-[15.5px] mt-6 lg:tracking-lighter text-[#111920] dark:text-white">
          Dive into a world where technology enhances life and work in
          unimaginable ways. At Victoriam, we're passionate about creating Al
          solutions that are not just advanced, but also intuitive and tailored
          to meet the evolving needs of our world.
        </p>
      </div>
      <div
        className="  md:order-none"
        style={{ height: "290px", width: "100%" }}
      >
        <img
          style={{ height: "100%", width: "100%" }}
          className="rounded-md"
          //  className="w-full order-1 md:order-none imageSize"
          src="/about-1.jpg"
        />
      </div>
      <div
        className="order-2 md:order-none"
        style={{ height: "290px", width: "100%" }}
      >
        <img
          style={{ height: "100%", width: "100%" }}
          className="rounded-md"
          //  className="w-full order-3 md:order-none imageSize"
          src="/about-2.png"
        />
      </div>
      <div id="comapny" className="order-3 text-left md:order-none">
        <h2 className="text-[40px] dark:text-white capitalize leading-[48px] font-bold">
          Our Ambition Is Simple
        </h2>
        <p className="my-4 text-text-left text-[13.5px] tracking-lighter lg:text-left lg:text-[15.5px] mt-6 lg:tracking-lighter text-[#111920] dark:text-white">
          To integrate Al into everyday life, making it more efficient,
          creative, and enjoyable. We envision a future where our innovations
          serve as the backbone for this transformation, accessible to all.
        </p>
      </div>

      <div id="api" className="order-6 text-left md:order-none">
        <h2 className="text-[40px] dark:text-white capitalize leading-[48px] font-bold">
          Our Journey
        </h2>
        <p className="my-4 text-left text-[13.5px] tracking-lighter lg:text-left lg:text-[15.5px] mt-6 lg:tracking-lighter text-[#111920] dark:text-white">
          From a spark of inspiration to a beacon of innovation, Victoriam has
          always been driven by the potential of Al to change the world. Our
          journey is marked by a commitment to excellence, curiosity, and a deep
          desire to make a positive impact.
        </p>
      </div>
      <div
        className="order-5 md:order-none"
        style={{ height: "290px", width: "100%" }}
      >
        <img
          style={{ height: "100%", width: "100%" }}
          className="w-full rounded-md order-6 md:order-none"
          src="/about-3.jpg"
        />
      </div>
    </section>
  );
}

export default AboutSection;
