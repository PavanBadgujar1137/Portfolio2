import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import RankOfGrade from './RankOfGrade'
import About from './About'
import Skill from './Skill'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  
  return (
    <>
       <div className="px-[33px] font-poppins">
         <Navbar/>
         <Hero/>
         <RankOfGrade/>
       </div>
         <About/>
         <Skill/>
         <Contact/>
         <Footer/>
    </>
  )
}

export default Home