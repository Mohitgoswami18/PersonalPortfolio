import React from 'react';
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'

function ProjectCard({ name, image, description, link, skillTag, }) {
  const {ref, inView} = useInView({
      triggerOnce:false,
      threshold:0
    });
  return (
    <motion.div
    
    initial={{opacity:0, scale:0.9,}}
          animate={inView ? {opacity:1, scale:1, x:0, y:0} : {}}
          transition={{duration:0.5,ease:'easeIn'}}
          
    
    ref={ref} className="bg-[#161b22] border-1 hover:border-2 border-slate-700 font-[Poppins] rounded-xl m-1  shadow-md p-4 hover:shadow-lg hover:-translate-y-1 flex flex-col  hover:scale-106 transition-all duration-300 justify-center">
      {console.log(skillTag)}
      {image && (
        <img
          src={image}
          alt={`${name}-preview`}
          className="w-full text-center h-40 object-cover rounded-md mb-4"
        />
      )}
      <h5 className="text-white  text-md hover:underline text-center overflow-hidden cursor-pointer group font-semibold mb-2">
        {name}
      </h5>
      <div  className='w-full h-1 border-t-2 bg-transparent border-zinc-800 m-2'/>
      <h4 className="text-white  text-[12px] overflow-hidden cursor-pointer group font-semibold mb-2"> GitHub Repo -<a className='overflow-hidden hover:underline hover:scale-110 transition-all ' 
      target='blank'
      href={`https://github.com/Mohitgoswami18/Basic-Frontend-Project/tree/main/${name}`}> View <i class="fa-solid  fa-up-right-from-square"></i><br /></a></h4>
      {
        link && (
          <h4 className="text-white  text-[12px] overflow-hidden cursor-pointer group font-semibold mb-2">Deployed -<a className='overflow-hidden hover:underline pl-1 hover:scale-110 transition-all ' target='blank' href={link}> View  <i class="fa-solid fa-up-right-from-square"></i><br /></a></h4>
        )
      }
      <div className='flex flex-col h-35 justify-between'>
      <p className="text-gray-400 text-[11px] mb-4 max-w-[400px] break-words overflow-hidden">
  {description}
</p>
  <div className='relative gap-2 flex text-[10px]'>
  {
    skillTag.map((elem)=>(
      <p className='rounded-2xl text-[10px] font-semibold ring-slate-700 ring-1 hover:scale-115 transition-all bg-white/10 backdrop-blur-2lg px-3 py-2'>{elem}</p>
    ))
  }
  </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
