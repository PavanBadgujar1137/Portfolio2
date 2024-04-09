import React from 'react'

const Skill = () => {
  return (
    <div>
        <p class="font-Poppins text-[35px] md:text-[47px] text-center md:text-left text-[#5E3AEE] px-[50px] md:px-[34px]  font-extrabold py-5  ">Skills</p>
        <div class="grid grid-cols-4 gap-y-10 mx-auto w-[90%] items-center rounded-md p-5 bg-[#F0F0F5] ">
            <img src={require('../images/icons/c.png')} className="w-10 h-10 md:w-[120px] md:h-[120px] mx-auto md:rounded-md transition-all md:hover:scale-125 hover:scale-105 duration-200 shadow-2xl shadow-black cursor-pointer" alt='c'/>
            <img src={require('../images/icons/cpp.png')} className="w-10 h-10 md:w-[120px] md:h-[120px] mx-auto md:rounded-md transition-all md:hover:scale-125 hover:scale-105 duration-200 shadow-2xl shadow-black cursor-pointer" alt='c++'/>
            <img src={require('../images/icons/python.png')} className="w-10 h-10 md:w-[120px] md:h-[120px] mx-auto md:rounded-md transition-all md:hover:scale-125 hover:scale-105 duration-200 shadow-2xl shadow-black cursor-pointer" alt='python'/>
            <img src={require('../images/icons/java.png')} className="w-10 h-10 md:w-[120px] md:h-[120px] mx-auto md:rounded-md transition-all md:hover:scale-125 hover:scale-105 duration-200 shadow-2xl shadow-black cursor-pointer" alt='java'/>
            <img src={require('../images/icons/HTML.png')} className="w-10 h-10 md:w-[120px] md:h-[120px] mx-auto md:rounded-md transition-all md:hover:scale-125 hover:scale-105 duration-200 shadow-2xl shadow-black cursor-pointer" alt='HTMl'/>
            <img src={require('../images/icons/CSS.png')} className="w-10 h-10 md:w-[120px] md:h-[120px] mx-auto md:rounded-md transition-all md:hover:scale-125 hover:scale-105 duration-200 shadow-2xl shadow-black cursor-pointer" alt='CSS'/>
            <img src={require('../images/icons/Tailwind.png')} className="w-10 h-10 md:w-[120px] md:h-[120px] mx-auto md:rounded-md transition-all md:hover:scale-125 hover:scale-105 duration-200 shadow-2xl shadow-black cursor-pointer" alt='Tailwind'/>
            <img src={require('../images/icons/javascript.png')} className="w-10 h-10 md:w-[120px] md:h-[120px] mx-auto md:rounded-md transition-all md:hover:scale-125 hover:scale-105 duration-200 shadow-2xl shadow-black cursor-pointer" alt='Javascript'/>
            <img src={require('../images/icons/React.png')} className="w-10 h-10 md:w-[120px] md:h-[120px] mx-auto md:rounded-md transition-all md:hover:scale-125 hover:scale-105 duration-200 shadow-2xl shadow-black cursor-pointer" alt='React'/>
            <img src={require('../images/icons/Express.png')} className="w-10 h-10 md:w-[120px] md:h-[120px] mx-auto md:rounded-md transition-all md:hover:scale-125 hover:scale-105 duration-200 shadow-2xl shadow-black cursor-pointer" alt='Express'/>
            <img src={require('../images/icons/mongodb.jpg')} className="w-10 h-10 md:w-[120px] md:h-[120px] mx-auto md:rounded-md transition-all md:hover:scale-125 hover:scale-105 duration-200 shadow-2xl shadow-black cursor-pointer" alt='Mongodb'/>
            <img src={require('../images/icons/nodejs.png')} className="w-10 h-10 md:w-[120px] md:h-[120px] mx-auto md:rounded-md transition-all md:hover:scale-125 hover:scale-105 duration-200 shadow-2xl shadow-black cursor-pointer" alt='Nodejs'/>
          
            
        </div>
    </div>
  )
}

export default Skill