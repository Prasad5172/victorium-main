import { useEffect, useState } from "react";
import Button from "../components/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';

function DirectorsSection() {
  const [dark, setDark] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      let theme = localStorage.theme;
      setDark(theme === "dark" ? true : false);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="team" className="px-10 md:px-32 mt-32 dark:text-white">
      <div className=" justify-between items-center mb-6 text-center lg:text-left md:text-left">
        <h2 className="text-[36px] leading-9 md:leading-none md:text-[40px] font-bold ">
          Team
        </h2>
      </div>

      <div   className="grid grid-col-2 md:grid-cols-3 gap-6 text-center md:text-left overflow-x-hidden">
        <div className="flex flex-col items-center" >
          
          <img
            data-aos="fade-right"
            className="object-contain rounded-md w-full h-[409px] no-right-click selectDisable"
            draggable= "false"
            src={dark ? "director2-dark.jpg" : "director2-white.jpg"}
            
          />
          <h2 className="text-[28px] md:text-[32px] leading-[40px] font-bold mt-[24px]">
            Syed Ali
          </h2>
          <span className="font-semibold text-[20px]">Founder & CEO</span>
        </div>
        <div className="flex flex-col items-center" >
          <img
            data-aos="fade-up"
            className="object-contain w-full h-[409px] rounded-md no-right-click selectDisable "
            draggable= "false"
            src={dark ? "team1-dark.jpg" : "team1-white.jpg"}
          />
          <h2 className="text-[28px] md:text-[32px] leading-[40px] font-bold mt-[24px]">
            Masumah Akbar
          </h2>
          <span className="font-semibold text-[20px]">CLO & Co-Founder</span>
        </div>
        <div className="flex flex-col items-center" >
          <img
            data-aos="fade-left"
            className="object-contain w-full rounded-md h-[409px] no-right-click selectDisable overflow-hidden"
            draggable="false"
            src={dark ? "cto-dark.jpg" : "cto-light.jpg"}
          />

          <h2 className="text-[28px] md:text-[32px] leading-[40px] font-bold mt-[24px]">
            Syed Owais Chishti
          </h2>
          <span className="font-semibold text-[20px]">CTO</span>
        </div>

        <div className="flex flex-col items-center" >
          <img
            data-aos="fade-right"
            className="object-contain w-full h-[409px] rounded-md no-right-click selectDisable"
            draggable = "false"
            src={dark ? "team2-dark.jpg" : "team2-white.jpg"}
          />
          <h2 className="text-[28px] md:text-[32px] leading-[40px] font-bold mt-[24px]">
            Irum Nawaz
          </h2>
          <span className="font-semibold text-[20px]">SLP Director</span>
        </div>
        <div className="flex flex-col items-center" >
          <img
            data-aos="fade-up"
            className="object-contain w-full h-[409px] rounded-md no-right-click selectDisable"
            draggable = "false"
            src={dark ? "team3-dark.jpg" : "team3-white.jpg"}
          />
          <h2 className="text-[28px] md:text-[32px] leading-[40px] font-bold mt-[24px]">
            Qamar Akbar
          </h2>
          <span className="font-semibold text-[20px]">
            Clinical Research Advisor
          </span>
        </div>
        <div className="flex flex-col items-center" >
          <img
            data-aos="fade-left"
            className="object-contain w-full h-[409px] rounded-md no-right-click selectDisable"
            draggable = "false"
            src={dark ? "team4-dark.jpg" : "team4-white.jpg"}
          />
          <h2 className="text-[28px] md:text-[32px] leading-[40px] font-bold mt-[24px]">
            Sanwal Khan
          </h2>
          <span className="font-semibold text-[20px]">Lead AI Engineer</span>
        </div>

        {/* <div>
          <img className="object-cover w-full h-[409px]" src="director-4.png" />
          <h2 className="text-[28px] md:text-[32px] leading-[40px] font-bold mt-[24px]">
            Mr. Name Here
          </h2>
          <span className="font-semibold text-[20px]">Founder & CEO</span>
        </div>

        <div>
          <img className="object-cover w-full h-[409px]" src="director-5.png" />
          <h2 className="text-[28px] md:text-[32px] leading-[40px] font-bold mt-[24px]">
            Mr. Name Here
          </h2>
          <span className="font-semibold text-[20px]">Founder & CEO</span>
        </div>

        <div>
          <img className="object-cover w-full h-[409px]" src="director-6.jpg" />
          <h2 className="text-[28px] md:text-[32px] leading-[40px] font-bold mt-[24px]">
            Mr. Name Here
          </h2>
          <span className="font-semibold text-[20px]">Founder & CEO</span>
        </div> */}
      </div>
    </div>
  );
}

export default DirectorsSection;
