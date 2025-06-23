import React from 'react'
import gfgcertificate from '../assets/icons/gfgcertificate.png'                                         
import eduskillCertificate from '../assets/icons/eduskillCertificate.png'                                         
import eduskill2 from '../assets/icons/eduskill2.png'                                         
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';


function Certifications() {

    const { ref, inView } = useInView ( {
    triggerOnce:false,
    threshold:0,
    })

  return (
    <div className='py-12' ref={ref}>
      <div className="mt-12">
        <h3 className="font-bold text-5xl mb-2 text-center text-blue-500">Certifications</h3>
        <div className="mt-12 flex">
          <div className='w-1/2 flex flex-col gap-2'>
            <motion.img src={gfgcertificate} alt="GFG Certificate" 
          initial={{opacity:0}}
          className='w-80'
          animate={inView ? {opacity:1} : {}}
          transition={{duration:1.5, ease:'easeIn'}}/>
          <motion.img src={eduskill2} 
          className='w-80'
          alt="eduskill2" 
          initial={{opacity:0}}
          animate={inView ? {opacity:1} : {}}
          transition={{duration:1.5, ease:'easeIn'}}/>

          </div>
          <div className='w-1/2'>
             <motion.img src={eduskillCertificate} alt="eduskillCertificate" 
             className='w-80'
          initial={{opacity:0}}
          animate={inView ? {opacity:1} : {}}
          transition={{duration:1.5, ease:'easeIn'}}/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Certifications
