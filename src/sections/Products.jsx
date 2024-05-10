import Arrow from "../Assets/Arrow";

function ProductsSection() {
  return (
    <div id="products" className="px-12 md:px-32 dark:text-white">
      <h2
        className="mb-8 capitalize text-center lg:text-left md:text-left font-bold text-[40px] md:text-[46px] "
      >
        Product
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 text-[#111920] dark:text-white">
        <div>
          <div className="flex justify-between items-center my-3">
            <h3 className="font-bold text-[24px] md:text-[32px]">IzzyAI</h3>
            <a
              href="http://izzyai.com/"
              className="px-4 py-2 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-[#0CC8E8] dark:to-[#2DEEAA] border border-black dark:border-[#283642] hover:border-transparent dark:hover:border-transparent cursor-pointer flex items-center uppercase font-bold"
            >
              Try IzzyAI <Arrow />
            </a>
          </div>
          <p className="text-xl font-bold mt-4 text-center lg:text-left md:text-left">
            Your Personal Digital Speech Therapy Companion
          </p>
          <p className="text-center  text-[15.5px]  tracking-lighter lg:text-left md:text-[14px] lg:text-[15.5px] mt-6 lg:tracking-lighter">
            Begin your journey with IzzyAI’s comprehensive assessment, powered
            by advanced AI models. These initial evaluations accurately identify
            your speech patterns, pinpointing areas for improvement. This
            tailored approach ensures that you receive the most effective
            therapy right from the start. With IzzyAI, tracking your progress is
            seamless. After each session, receive comprehensive reports
            detailing your improvements, areas that need more attention, and
            insights into your overall speech development.
          </p>
        </div>
        {/* border-b-sky-500 border-b */}
        <div>
          <img
            className="object-cover rounded h-fit w-full "
            src="/products-1.png"
            alt="Product 1"
          />
          {/* Uncomment the below code to include the second product */}
          {/* <img src="/products-2.png" alt="Product 2" />
          <div className="flex justify-between items-center my-3">
            <h3 className="font-bold text-[24px] md:text-[32px]">Victor AI</h3>
            <a
              // href="#"
              className="px-4 py-2 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-[#0CC8E8] dark:to-[#2DEEAA] border border-black dark:border-[#283642] hover:border-transparent dark:hover:border-transparent cursor-pointer flex items-center uppercase font-bold"
            >
              Try Victor <Arrow />
            </a>
          </div>
          <p>Transforming Fashion Design with Advanced AI-Driven Creativity.</p> */}
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;
