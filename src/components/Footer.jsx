import React from 'react'
import {BsLinkedin,BsGithub,BsTwitter,BsFacebook,BsInstagram} from "react-icons/bs"
import { Link } from 'react-router-dom'

const Footer = () => {
  const scrollToAbout=()=>{
    const aboutSection = document.getElementById('about-section');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
  const scrollHome=()=>{
    const homeSection=document.getElementById('home-section')
    homeSection.scrollIntoView({behavior:"smooth"})
  }
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    // <!-- Footer Section -->
    <div class="px-[37px] md:px-[33px] flex flex-col md:flex-row gap-2 items-center md:justify-between my-[50px] md:my-[90px] bg-white">
        {/* <!-- Navigation Links --> */}
        <div  class="flex gap-2 w-full md:gap-5 items-center text-[15px] md:text-[20px] justify-between md:justify-start">
            <p onClick={scrollHome} class="cursor-pointer md:my-[10px] my-[5px] hover:font-bold transition-all delay-150 hover:scale-95 duration-300">Home</p>
            <Link class="cursor-pointer md:my-[10px] my-[5px] hover:font-bold transition-all delay-150 hover:scale-95 duration-300" to={"/project-route"}>Projects</Link>
            <p onClick={scrollToAbout} class="cursor-pointer md:my-[10px] my-[5px] hover:font-bold transition-all delay-150 hover:scale-95 duration-300">About</p>
            <p onClick={scrollToContact} class="cursor-pointer md:my-[10px] my-[5px] hover:font-bold transition-all delay-150 hover:scale-95 duration-300">Contact</p>   
        </div>
        {/* <!-- Social Media Icons --> */}
        <div class="flex md:flex-row gap-2 md:gap-5 md:5 w-full justify-between md:justify-end text-4xl md:text-5xl ">
           <a href="https://www.linkedin.com/in/pavan-badgujar-831012244/"><BsLinkedin className='cursor-pointer md:my-[10px] my-[5px] transition-all md:hover:scale-125 hover:scale-105 duration-200 shadow-2xl shadow-black" style="font-size:36px'/></a> 
           <a href="https://github.com/PavanBadgujar1137?tab=repositories"><BsGithub  className='cursor-pointer md:my-[10px] my-[5px] transition-all md:hover:scale-125 hover:scale-105 duration-200 shadow-2xl shadow-black" style="font-size:36px'/></a> 
          <a href="https://m.facebook.com/profile.php/?id=100033647000249"><BsFacebook  className='cursor-pointer md:my-[10px] my-[5px] transition-all md:hover:scale-125 hover:scale-105 duration-200 shadow-2xl shadow-black" style="font-size:36px'/></a>
          <a href="https://twitter.com/PavanB1137"><BsTwitter  className='cursor-pointer md:my-[10px] my-[5px] transition-all md:hover:scale-125 hover:scale-105 duration-200 shadow-2xl shadow-black" style="font-size:36px'/></a>  
            
        </div>
    </div>
  )
}

export default Footer