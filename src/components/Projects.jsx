// src/components/Projects.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import port from "../images/port.png"
import study from "../images/study.png"
import eBay from "../images/eBay.png"
import DevDetector from "../images/DevDetector.png"
import {AiOutlineGithub} from 'react-icons/ai'


const projects = [
  {
    title: 'StudyNotion',
    description: 'A fully functional Ed-tech platform that enables users to create, consume, and rate educational content. Ensured responsive design, elegant UI/UX with Tailwind CSS, and implemented secure authorization, including sign-up and logout features.',
    imageUrl: study, // Add your image URL here
    projectLink:'https://studynotion-frontend-sandy.vercel.app/'
  },
  // {
  //   title: 'Portfolio',
  //   description: 'This portfolio website, built using React and styled with Tailwind CSS, elegantly showcases skills and projects. Its user-friendly design adapts to any device........',
  //   imageUrl: port, // Add your image URL here
  //   projectLink:'https://e-bay-an-e-commerce-platform1.vercel.app/'
  // },
  {
    title: 'eBay',
    description: 'Developed a MERN stack e-commerce app with user registration, login, and product data retrieval from an external API. Optimized user experience with simplified cart management and real-time total calculation.Integrated a secure database system for efficient storage and retrieval of user and product data.',
    imageUrl: eBay, // Add your image URL here
    projectLink:'https://e-bay-an-e-commerce-platform1.vercel.app/'
  },
  {
    title: 'DevDetector',
    description: 'In DevDetector, leveraged HTML5, CSS, and JavaScript to fetch GitHub data through the GitHub API. Enhanced user experience by implementing a toggle feature for dark and light modes. Ensured efficient data handling via optimized API calls and utilization of Event Listeners. Implemented a responsive design to create an engaging and interactive user interface.Developed a MERN stack e-commerce app with user registration, login, and product data retrieval from an external API. Optimized user experience with simplified cart management and real-time total calculation.Integrated a secure database system for efficient storage and retrieval of user and product data.',
    imageUrl: DevDetector, // Add your image URL here
    projectLink:'https://6538232072e54c0b768dd448--chimerical-blancmange-261146.netlify.app/'
  },
];

function Projects() {
   // Determine how many slides you want in the slider
   const numberOfSlides = 3;

   // Create an array of project items by repeating the projects
   const projectItems = Array.from({ length: numberOfSlides }, (_, index) => {
     const projectIndex = index % projects.length; // Get the index of the project to repeat
     return projects[projectIndex];
   });
 
   return (
    <div className='md:w-[90%] md:h-[90%] w-fit h-[90%]  flex-col md:flex justify-center  items-center'>
      <Carousel showThumbs={false} className=' md:w-full w-screen'>
       {projectItems.map((project, index) => (
        <a href={project.projectLink} target="_blank" rel="noopener noreferrer w-full">
           <div key={index} className=" p-[5px] md:p-[10px] flex flex-col md:gap-4 gap-[25px] md:h-full h-screen justify-center">
           
           <h3 className="text-xl md:text-3xl font-semibold mt-2 text-white">{project.title}</h3>
            <img
              src={project.imageUrl}
              alt={`Project ${index + 1}`}
              className="md:w-full w-auto h-auto rounded-2xl "
            />
            <p className="text-gray-400 text-sm w-full flex flex-wrap text-justify p-3 md:text-xl">{project.description}</p>
            </div>
        </a>
        
       ))}
     </Carousel>
     <a href="https://github.com/PavanBadgujar1137?tab=repositories">
      <AiOutlineGithub className='text-white text-[30px] mb-4 w-full flex md:hover:text-[50px] hover:scale-90  transition-all hover:cursor-pointer delay-100'/>
     </a>
    </div>
  
   );
 
  
}

export default Projects;
