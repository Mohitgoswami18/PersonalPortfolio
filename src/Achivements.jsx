import React from 'react'
import gfgbag from './assets/icons/gfgbag.png'
import hackathonlogo from './assets/icons/hackathonlogo.png'
import tcs from './assets/icons/tcs.png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

function Achivements() {

    const { ref, inView } = useInView ({
        triggerOnce:false,
        threshold:0,
    })

  return (
    <div ref={ref}>
      

      <div className='border-l-4  px-4 border-[#10172c]'>

        {/* achivement 1 */}
        <div className="flex items-center mt-22">
            <motion.img src={tcs} alt="tcs mail" class="rounded-md w-58 m-4 h-38"
            initial={{opacity:0, x:-40}}
            animate={ inView ? {opacity:1, x:0} : {}}
            transition={{duration:1,}}/>
        <motion.div class=" my-2 px-8 py-2 mt-4 rounded-lg shadow-lg bg-[#0b1225] text-white w-fit"
        initial={{opacity:0, x:40}}
            animate={ inView ? {opacity:1, x:0} : {}}
            transition={{duration:1,}}>
            <h3 class="text-lg font-semibold">TCS CodeVita Season 12 — Cleared Round 1</h3>
            <p className="text-[#8B949E] mt-4">Cleared Round 1 of TCS CodeVita Season 12, competing against participants from all over the world. (GFG-160)</p>
        </motion.div>
        </div>


        {/* achivement 2 */}
        <div className="flex items-center">
        <motion.div class=" my-2 px-8 py-2 mt-4 rounded-lg shadow-lg bg-[#0b1225] text-white w-fit"
        initial={{opacity:0, x:40}}
            animate={ inView ? {opacity:1, x:0} : {}}
            transition={{duration:1,}}>
            <h3 class="text-lg font-semibold">GFG 160-Day Challenge Bag (2025)</h3>
            <p className="text-[#8B949E] mt-4">Awarded for completing the 160-Day of problem solving Challenge on GeeksforGeeks.</p>
        </motion.div>
            <motion.img src={gfgbag} alt="GFG Bag" class="rounded-full w-32 m-4"
            initial={{opacity:0, x:-40}}
            animate={ inView ? {opacity:1, x:0} : {}}
            transition={{duration:1,}}/>
        </div>

        {/* achivement 3 */}
        <div className="flex items-center">
            <motion.img src={hackathonlogo} alt="dev Gathering logo" class="rounded-full w-32 h-22 m-4"
            initial={{opacity:0, x:40}}
            animate={ inView ? {opacity:1, x:0} : {}}
            transition={{duration:1,}}/>
            <motion.div class=" my-2 px-8 py-4 rounded-lg shadow-lg bg-[#0b1225] text-white w-fit"
            initial={{opacity:0, x:-40}}
            animate={ inView ? {opacity:1, x:0} : {}}
            transition={{duration:1,}}
            >
                <h3 class="text-lg font-semibold">Hackathon Participant — [Dev Gathering 2k25] (2025)</h3>
                <p className="text-[#8B949E] mt-4">Selected to compete, gaining valuable experience in coding under pressure and collaboration..</p>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Achivements
