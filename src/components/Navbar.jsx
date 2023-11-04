import React from 'react';
import { AiTwotoneHome } from 'react-icons/ai';
import {GoProjectSymlink} from 'react-icons/go'
import {GiInnerSelf} from 'react-icons/gi'
import {IoMdContact} from 'react-icons/io'
import { Link } from 'react-router-dom';

const Navbar = () => {
   const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    contactSection.scrollIntoView({ behavior: 'smooth' }); 
    
  };
  const scrollToAbout=()=>{
    const aboutSection = document.getElementById('about-section');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollNavbar=()=>{
    const homeSection=document.getElementById('home-section')
    homeSection.scrollIntoView({behavior:"smooth"})
  }
  return (
    <nav id='home-section' className="mx-auto w-full flex justify-between my-[26px] items-center font-Poppins mt-[20px]">
      {/* Logo and Navigation Links */}
      <div className="text-[15px] md:text-4xl text-[#5E3AEE] font-bold lg:text-5xl">Pavan Badgujar</div>
      <div>
        {/* Desktop Navigation Links */}
        <div className="md:flex gap-5 text-[15px] hidden font-medium p-1 md:p-3 md:text-xl 2xl:text-4xl 2xl:gap-[50px]">
          <p onClick={scrollNavbar} className="hover:font-bold cursor-pointer transition-all duration-100 delay-75">Home</p>
          <Link className="hover:font-bold cursor-pointer transition-all delay-150 hover:scale-95 duration-300" to={"/project-route"}>Projects</Link>
         
          <p onClick={scrollToAbout}  className="hover:font-bold cursor-pointer transition-all delay-150 hover:scale-95 duration-300">About</p>
          <p onClick={scrollToContact} className="hover:font-bold cursor-pointer transition-all delay-150 hover:scale-95 duration-300">Contact</p>
        </div>
        {/* Mobile Navigation Links (Hidden by Default) */}
        <div className="md:hidden text-[17px] flex items-center gap-3">
           <AiTwotoneHome />
           <GoProjectSymlink/>
           <GiInnerSelf />
           <IoMdContact/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
