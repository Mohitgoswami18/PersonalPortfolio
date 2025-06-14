import React, { useRef, useEffect, useState } from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Achievements from './components/Progress'
import QuestionMeter from './components/QuestionMeter'

function App() {

  const homeref = useRef();
  const aboutref = useRef();
  const skillref = useRef();
  const projectref = useRef();
  const contactref = useRef();
  const achivementref = useRef();


  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0,
  })

  function mousestyle (e) {
    setMousePosition({
      x:e.clientX,
      y:e.clientY
    })
  }

  const  cursorStyle ={
      position: 'fixed',
      top: mousePosition.y,
      left: mousePosition.x,
      width: '80px',
      height: '80px',
      backgroundColor: '#60A5FA', 
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 9999,
      opacity: 1,
      filter: 'blur(80px)',
      pointerEvents: 'none',
      transition: 'top 0.05s linear, left 0.05s linear',
  }

  const mouseStyle = useEffect (()=>{
    window.addEventListener('mousemove', (e)=>mousestyle(e)); 

    return window.removeEventListener('mousemove', (e)=>mousestyle(e));
  }, [])

  return (
    <div className='bg-[#0A0F1C]'>
      <div style={cursorStyle}></div>
    
    <div className='bg-[#0A0F1C] md:flex '>
      <div><Navbar homeref = {homeref} aboutref = {aboutref} skillref = {skillref} projectref = {projectref}  contactref = {contactref} achivementref = {achivementref}></Navbar></div>
      <div ref={homeref} id='homeref' className='lg:ml-56 lg:'><HeroSection /></div>
    </div>

    <div className='mt-50 md:mt-20 md:ml-50 md:px-20'>
      <div ref={aboutref} id='aboutref' className=' h-screen'><Introduction></Introduction></div>
      <div ref={skillref} id='skillref' className='mt-30 md:mt-[-60px]'><Skills></Skills></div>
      <div ref={achivementref} id='achivementref' className='mt-30 md:mt-[-60px]'><Achievements /></div>
      <div ref={projectref} id='projectref' className='mt-15 md:mt-[-60px]'><Projects></Projects></div>
      <div ref={contactref} id='contactref' className=' md:mt-[-60px]'><Contact></Contact></div>
    </div>
</div>
  )
}

export default App

