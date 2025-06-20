import React from 'react';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

function Contact() {

  const {ref, inView} = useInView ({
    triggerOnce:false,
    threshold:0,
  })
 
  return (
    <section
    ref={ref}
      id="contact"
      className="mt-60 pb-[300px] lg:ml-18 max-w-[800px] text-white py-16 flex flex-col items-center font-[Poppins]"
    >
      <motion.h2 className="text-4xl text-blue-500 font-bold mb-4"
      initial={{y:-20, opacity:0}}
      animate={inView ? {y:0, opacity:1} : {}}
      transition={{duration:1}}
      >Contact Me</motion.h2>
      <motion.p className="text-center text-lg max-w-xl mb-8"
      initial={{y:-20, opacity:0}}
      animate={inView ? {y:0, opacity:1} : {}}
      transition={{duration:1, delay:0.1}}>
        I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to connect!
      </motion.p>

      {/* Email */}
      <motion.a
        initial={{y:20, opacity:0}}
      animate={inView ? {y:0, opacity:1} : {}}
      transition={{duration:1, delay:0.1}}
        href="mailto:your. mohitgoswami18326@gmail.com"
        className="text-blue-400 hover:underline text-lg mb-6">
        mohitgoswami18326@gmail.com
      </motion.a>

      {/* Social Links */}
      <motion.div className="flex flex-col sm:flex-row gap-4 text-lg text-center underline"
      initial={{y:20, opacity:0}}
      animate={inView ? {y:0, opacity:1} : {}}
      transition={{duration:1, delay:0.1}}>
        <a
          href="https://github.com/mohitgoswami18"
          target="_blank"
          className="text-white hover:text-blue-500 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          className="text-white hover:text-blue-500 transition underline"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/_mohit_goswami_"
          target='blank'
          className="text-white hover:text-blue-500 transition underline"
        >
          Instagram
        </a>
      </motion.div>
    </section>
  );
}

export default Contact;
