import React from 'react'

const RankOfGrade = () => {
  return (
    // <!-- Number Section -->
            <div class="md:p-[10px] md:mt-[101px]  grid grid-cols-2 md:grid-cols-4 gap-[108px] place-content-center rounded-md p-5 md:text-center mt-[64px] bg-[#F0F0F5]">
                {/* <!-- Number Blocks with Descriptions --> */}
                <div class="md:my-[40px]">
                    <p class="text-black text-[26px] md:text-[49px] font-bold text-center">25+</p>
                    <div class="md:my-[2px] text-[#BFB8B8] text-[8px] md:text-[18px]">
                        <p class="text-center">Projects Completed</p>
                    </div>
                </div>
                <div class="md:my-[40px]">
                    <p class="text-black text-[26px] md:text-[49px] font-bold text-center">25+</p>
                    <div class="md:my-[2px] text-[#BFB8B8] text-[8px] md:text-[18px]">
                        <p class="text-center">Github Repository</p>
                    </div>
                </div>
                <div class="md:my-[40px]">
                    <p class="text-black text-[26px] md:text-[49px] font-bold text-center">1+</p>
                    <div class="md:my-[2px] text-[#BFB8B8] text-[8px] md:text-[18px]">
                        <p class="text-center">Years of Experience</p>
                    </div>
                </div>
                <div class="md:my-[40px]">
                    <p class="text-black text-[26px] md:text-[49px] font-bold text-center">150+</p>
                    <div class="md:my-[2px] text-[#BFB8B8] text-[8px] md:text-[18px]">
                        <p class="text-center">Solve Problems</p>
                    </div>
                </div>
            </div>
  )
}

export default RankOfGrade