import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div className='bg-[#0A0F1C]'>
    
    <div className='bg-[#0A0F1C] md:flex '>
      <div><Navbar></Navbar></div>
      <div className='lg:ml-56'><HeroSection /></div>
    </div>

    <div className='mt-50 md:mt-20 md:ml-50 md:px-20'>
      <div className=' h-screen'><Introduction></Introduction></div>
      <div className='mt-100 md:mt-[-60px]'><Skills></Skills></div>
      <div className='mt-25 md:mt-[-60px]'><Projects></Projects></div>
      <div className='mt-10 md:mt-[-60px]'><Contact></Contact></div>
    </div>
</div>
  )
}

export default App
