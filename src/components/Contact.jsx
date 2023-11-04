import React from 'react'

const Contact = () => {
  return (
    // <!-- Contact Section -->
    <div id="contact-section" class="flex flex-col md:flex-row items-center md:items-start px-[50px] md:px-[34px] justify-between bg-[#5E3AEE] w-full mt-[60px] md:gap-[30px]">
        <div class="flex flex-col flex-wrap md-mt[54px] items-center md:items-start">
            {/* <!-- Contact Title --> */}
            <p class="font-extrabold text-[#fff] text-[33px] md:text-[49px] mt-[12px] md:mt-[66px] m-3 md:m-6">Contact</p>
            {/* <!-- Contact Description --> */}
            <p class="font-medium text-[#fff] text-[15px] md:text-[21px] mt-[10px] md:mt-[21px] text-center">Want a website for your brand and business? I design what you desire....</p>
            {/* <!-- Image --> */}
            <div class="mt-[10px] md:mt-[15px]">
                <img src={(require('../images/hshs 1.png'))} alt="inAeroplane" />
            </div>
        </div>
        {/* <!-- Contact Form --> */}
        <form class="w-full h-auto mt-[17px] md:mt-[37px] m-[5px] md:m-[10px] font-Poppins">
            {/* <!-- Name Input --> */}
            <div class="flex flex-col px-0 md:px-[10px]">
                <label class="text-[12px] md:text-[28px] font-semibold text-[#fff] my-1 md:my-2 block mb-2" for="name">Name</label>
                <input class="w-full h-[44px] md:[34px] p-1 md:p-2 opacity-50 text-gray-800 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" type="text" id="name" name="name" required />
            </div>
            {/* <!-- Email Input --> */}
            <div class="flex flex-col px-0 md:px-[10px]">
                <label class="text-[12px] md:text-[28px] font-semibold text-[#fff] my-1 md:my-2" for="email">Email</label>
                <input class="w-full h-[44px] md:[34px] outline-0 p-1 md:p-2 opacity-50 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"  type="email" id="email" name="email" required />
            </div>
            {/* <!-- Message Textarea --> */}
            <div class="flex flex-col px-0 md:px-[10px]">
                <label class="text-[12px] md:text-[28px] font-semibold text-[#fff] my-1 md:my-2" for="message">Message</label>
                <textarea class="w-full h-[140px] md:[34px] outline-0 p-1 md:p-2 opacity-50 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" id="message" name="message" rows="4" cols="50" required></textarea>
            </div>
            {/* <!-- Submit Button --> */}
            <div class="px-0 md:mx-[10px] md:h-[53px] rounded-2xl bg-red-500 text-white transition-all duration-200 delay-200 hover:scale-100 flex justify-center mt-[19px] md:mt-[30px] hover:text-white hover:bg-gray-800 shadow-2xl shadow-black mb-[48px] md:mb-[75px]">
                <button class="w-full md:text-[20px] font-medium p-1.5">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Contact