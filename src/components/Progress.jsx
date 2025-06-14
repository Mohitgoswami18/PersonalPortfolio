import React from "react";
import QuestionMeter from '../components/QuestionMeter'
import leetcode from '../assets/icons/leetcode.png'
import profileCard from '../assets/icons/profileCard.png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Achivements from "../Achivements";
import Certifications from './Certifications'

function Progress() {

  const { ref, inView } = useInView ( {
    triggerOnce:false,
    threshold:0,
  })

  return (
    <section ref={ref} id="certifications" className="p-6 mt-72 w-full">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-blue-500 text-center">My Journey In Short</h2>

      {/* Achievements Section */}
      <div className="mb-6 mt-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0">
            {/* coding section */}
          <motion.div className="text-xl font-semibold basis-[35%] bg-zinc-900/100 rounded-md backdrop-blur-2xl border-2 tracking-tighter text-center mt-4 p-2 text-[#8B949E] "
          initial={{opacity:0, y:-50}}
          animate={ inView ? {opacity:1, y:0} : {}}
          transition={{duration:1,}}>
            <div className="w-fit mx-auto"><img src={leetcode} alt="leetcode icon" className="w-15  drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] h-15 text-center" /></div>
            <p className="p-2">Solved 280+ DSA questions on leetcode</p>
            <QuestionMeter />
          </motion.div>

          {/* codolio card */}
          <motion.div className="text-xl bg-zinc-900/100 basis-[25%] flex items-center justify-center rounded-md backdrop-blur-2xl mx-auto border-2 font-semibold tracking-tighter text-center mt-4 p-2 text-[#8B949E] "
            initial={{opacity:0, y:30}}
          animate={ inView ? {opacity:1, y:0} : {}}
          transition={{duration:1,}}
          >
            <div>
                <img src={profileCard} className="h-72" alt="codolioCard" />
            </div>
          </motion.div>

          {/* development section */}
          <motion.div
          initial={{opacity:0, y:-50}}
          animate={ inView ? {opacity:1, y:0} : {}}
          transition={{duration:1,}}
           className="basis-[38%] text-xl flex flex-col justify-around bg-zinc-900/100 rounded-md backdrop-blur-2xl mx-auto border-2 font-semibold tracking-tighter text-center mt-4 p-2 text-[#8B949E]">
                <img className="h-32" src="https://github-readme-stats.vercel.app/api?username=mohitgoswami18&show_icons=true&theme=dark" alt="Github Stats" />
                <img className="h-36" src="https://github-readme-stats.vercel.app/api/top-langs/?username=mohitgoswami18&layout=compact&theme=dark" alt="Top languages" />
          </motion.div>

        </div>

      </div>

      {/* progress component */}
      <Achivements />

      {/* Certificates Section */}
      <Certifications />
      
    </section>
  )
}

export default Progress;
