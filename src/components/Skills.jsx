import React from 'react'
import SkillCard from './SkillCard'
import cpp from '../assets/icons/c++.png'
import python from '../assets/icons/python.png'
import html from '../assets/icons/html.png'
import css from '../assets/icons/css.png'
import js from '../assets/icons/js.png'
import git from '../assets/icons/git.png'
import github from '../assets/icons/github.png'
import vite from '../assets/icons/Vite.js.png'
import vercel from '../assets/icons/Vercel.png'
import nodejs from '../assets/icons/nodejs.png'
import tcss from '../assets/icons/tailwindcss.png'
import react from '../assets/icons/react.png'
import { useInView} from 'react-intersection-observer'
import { inView, motion } from 'framer-motion'

function Skills() {
    const { ref, inView} = useInView ({
        triggerOnce : true,
        threshold:0,
    })

    return (
        <motion.div ref={ref} className='font-[Poppins] mt-10 lg:mt-50  p-6 pt-10'
        >
            <motion.h1
             className='font-bold text-4xl lg:ml-[-90px] text-center lg:text-5xl text-blue-500'>Tech Stack</motion.h1>
            <motion.div
             className='flex mt-10 flex-wrap'>
                        <SkillCard image={cpp} title="C++" />
                        <SkillCard image={python} title="python" />
                        <SkillCard image={html} title="HTML" imageStyle = "w-19 p-4"/>
                        <SkillCard image={css} title="CSS" imageStyle= "w-20 lg:w-18 mt-1"/>
                        <SkillCard image={js} title="JS" />
                        <SkillCard image={tcss} title="tailwind css" imageStyle= "w-20 lg:mt-4 mt-5"/>
                        <SkillCard image={react} title="React" />
                        <SkillCard image={nodejs} title="Nodejs" />
                        <SkillCard image={git} title="git" />
                        <SkillCard image={github} title="GitHub" imageStyle = "w-20" />
                        <SkillCard image={vite} title="ReaVitect" />
                        <SkillCard image={vercel} title="Vercel" />
                        <SkillCard image={python} title="python" />
            </motion.div>
        </motion.div>
    )
}

export default Skills
