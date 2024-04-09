import React from "react";

const About = () => {
  return (
    // <!-- About Section -->
    <div
      id="about-section"
      class="bg-[#0F1221] w-full h-auto grid md:grid-cols-2 grid-flow-row md:px-[35px] gap-5 md:gap-0 mt-5 md:mt-[140px] md:h-[490px] px-[33px] md:place-content-center"
    >
      {/* <!-- Left Part (Image) -->  */}
      <div class="flex justify-center my-auto mt-[36px]">
        <img
          class="w-[300px] h-[250px] md:h-auto shadow-white shadow-lg rounded-3xl transform skew-x-12"
          src={require("../images/mee.png")}
          alt="Mobile phone"
        />
      </div>
      {/* <!-- Right Part (Text) --> */}
      <div class="w-full md:mt-[65px] mt-[36px] md:m-2 md:text-left h-auto md:h-auto flex flex-col md:flex-col items-center md:items-start">
        {/* <!-- Purple Line --> */}
        <div class="w-[186px] h-[21px] md:w-[205px] md:h-[27px] bg-[#5E3AEE]"></div>
        <h2 class="text-[28px] md:text-[40px] font-bold text-[#FFF] md:mb-[13px] m-2 md:m-4 md:mx-0">
          A Bit About Me...
        </h2>
        {/* <!-- About Me Text --> */}
        <p class="flex flex-wrap text-white text-[16px] md:text-[21px] text-center md:text-left font-medium">
          I'm Pavan Badgujar, and my journey as a Full-Stack Developer has been
          shaped by immersive internships at IT JOBXS and LearnSmasher. Through
          these experiences, I've delved deep into the world of software
          development, acquiring a rich understanding of the craft. My portfolio
          proudly showcases the culmination of my efforts, reflecting my
          dedication to delivering user-friendly and scalable digital solutions.
          Check out my projects on my GitHub account for a closer look at my
          work.
        </p>
        {/* <!-- GitHub Icon --> */}
        <div class="md:text-5xl text-5xl md:my-[10px] mb-4">
          <i class="fa fa-github text-[#5E3AEE]"></i>
        </div>
      </div>
    </div>
  );
};

export default About;
