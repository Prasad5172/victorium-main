import Button from "../components/Button";
import Arrow from "../Assets/Arrow";

function NewsSection() {

  const width = window.innerWidth;
  console.log(width);
  return (
    <div className="px-10  md:px-32 mt-32 text-[#111920] dark:text-white">
      <div className="  items-center mb-6 text-center lg:text-left md:text-left">
        <h2 className="text-[36px] md:text-[40px] leading-9 md:leading-normal font-bold ">
          Latest News
        </h2>
      </div>

      <div className="grid  space-x-6 grid-col-1 md:grid-cols-1 lg:grid-cols-2 text-center md:text-left">
        <div className="md:justify-start md:justify-start justify-center inline-flex items-center ">
          <div className="flex justify-start">
            <img
              className="object-cover rounded h-[300px] w-full "
              src="news-1.png"
            />
          </div>
        </div>
        <div className="justify-center text-left   inline-flex items-center" style={{marginLeft: width < 1030 ? "0px": "20px"}}>
          <div>
            <h2 className="text-[30px] md:text-[23px] leading-[40px] font-bold my-2 text-center lg:text-left md:text-left">
              {/* Victoriam launching the Speech Therapists  */}
              Victoriam Introduces Next Generation Speech Therapy
            </h2>

            {/* <p className="text-justify text-xs tight-letter-spacing tracking-tighter lg:text-justify md:text-[14px] lg:text-[15px] mt-6"> */}
            <p className="text-center  text-[15.5px] tracking-lighter lg:text-left md:text-[14px] lg:text-[15.5px] mt-6  lg:tracking-lighter">
              Embark on a transformative journey with IzzyAI's comprehensive
              assessment, leveraging cutting-edge AI models. These assessments
              meticulously analyze your speech patterns, precisely identifying
              areas for enhancement. Our personalized approach guarantees
              optimal therapy outcomes from the outset. With IzzyAI, monitoring
              your progress becomes effortless. Post each session, gain detailed
              reports showcasing improvements, highlighting areas requiring
              further attention, and providing insights into your overall speech
              evolution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
