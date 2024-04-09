import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    // <!-- Hero Section -->
    <div
      id="home-section"
      className="flex flex-col md:flex-row w-full h-auto items-center gap-4 justify-between mx-auto md:mt-[34px] md:px-[55px] bg-[#F0F0F5] rounded-md p-3 overflow-visible"
    >
      {/* <!-- First Part (Text) --> */}
      <div className="md:w-[55%] w-full flex flex-col flex-wrap md:px-[10px] text-center md:text-left font-Poppins">
        <p className="font-bold text-black md:text-[49px] md:mb-1">Hello,</p>
        <p className="font-bold text-black md:text-[49px]">
          I am{" "}
          <span className="md:text-[20px] text-[8px]  text-[#5E3AEE] font-semibold">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "Web Developer...",
                1000,
                "Fullstack Developer... ", // initially rendered starting point
                1000,
                "Frontend Developer...",
                1000,
                "Backend Developer...",
                1000,
                "Mernstack Developer...",
                1000,
                "Problem Solver...",
                500,
              ]}
              speed={50}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </span>
        </p>
        {/*<p className="md:text-[29px] text-[#696969] font-semibold">Frontend Developer</p> */}

        <div className="flex flex-wrap text-center md:text-start text-black font-medium text-[15px] md:text-[20px] md:mb-[15px]">
          Welcome to my portfolio! I'm a software developer with internship
          experience at IT JOBXS and LearnSmasher. Check out my GitHub for a
          variety of web development projects showcasing my skills and
          creativity.
        </div>
        {/* <!-- Contact and Projects Buttons --> */}
        <div className="flex flex-col  md:flex-row gap-6">
          <a href="https://drive.google.com/file/d/1M_Kv4fDF7cdV-w_5UeS-F5FLSZXkLp3x/view">
            <button
              type="button"
              className="md:w-[185px] md:h-[50px] text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Resume
            </button>
          </a>
          <Link
            type="button"
            className="md:w-[185px] md:h-[50px] text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 "
            to={"/project-route"}
          >
            Projects
          </Link>
        </div>
      </div>
      {/* <!-- Second Part (Image) --> */}
      <div className="flex items-center md:w-[434px] md:h-[408px] md:px-[10px]">
        <img
          src={require("../images/pavanB.jpeg")}
          className="rounded-full transition-all duration-75 hover:scale-95 cursor-pointer"
          alt="self-picture"
          width="434"
          height="408"
        />
      </div>
    </div>
  );
};

export default Hero;
