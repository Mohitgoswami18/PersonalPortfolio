import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function HeroSection({ contactref }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0 });

  const VerticalScroll = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-[800px] mx-auto pt-50 lg:pt-25 md:ml-40 font-[Poppins]"
    >
      <div className="flex text-center items-center gap-4 justify-center">
        <div className="md:p-8 w-full">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[#EAF0F7] text-2xl md:text-4xl font-bold tracking-wider"
          >
            Hi I'am
            <span className="text-blue-300 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Mohit Goswami 👋
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="text-[#8B949E] text-center text-sm mt-4 md:text-lg font-semibold"
          >
            DSA Lover | Front-end | Future ML-Engineer
          </motion.p>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
            className="text-md mt-8 text-[#C9D1D9] p-2 font-semibold"
          >
            "From JavaScript to Neural Networks — "
            <span className="text-blue-300">I'm learning it all!"</span>
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
            className="flex items-center mt-4 p-2 md:px-24 justify-around mx-auto"
          >
            <motion.span
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-white w-20 hover:text-black text-4xl cursor-pointer"
            >
              <a href="https://github.com/Mohitgoswami18" target="blank">
                <i className="fa-brands hover:text-[rgb()] fa-github hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]"></i>
              </a>
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-white hover:text-[rgb(225,48,108)] w-20 text-4xl cursor-pointer"
            >
              <a
                href="https://www.instagram.com/_mohit_goswami_/"
                target="blank"
              >
                <i className=" hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] fa-brands fa-instagram"></i>
              </a>
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-white w-20 text-4xl cursor-pointer"
            >
              <a
                href="https://www.linkedin.com/in/mohitgoswami18/"
                target="blank"
              >
                <i className="hover:text-[rgb(10,102,222)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] fa-brands fa-linkedin"></i>
              </a>
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2, fill: "rgb(255,153,0)" }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-white w-20 fill-white  text-4xl"
            >
              <a href="https://leetcode.com/u/Mohit18326/" target="blank">
                <i class="fa-solid fa-code w-16"></i>
              </a>
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <motion.a
              href="https://drive.google.com/file/d/1EjX49e4GUQt-_-zkcSmKBVsmw9s0NzHw/view?usp=drive_link"
              target="blank"
              className="text-md font-bold px-3 py-2 text-white bg-blue-500 m-1 rounded-4xl mt-4 cursor-pointer"
              whileHover={{
                backgroundColor: "#2563EB",
                boxShadow: "0px 0px 4px #3B82F6",
              }}
              whileTap={{ scale: 0.9 }}
            >
              View Resume
            </motion.a>

            <motion.a
              className="text-md font-bold px-3 py-2 m-1 rounded-4xl mt-4 text-[#3B82F6] border border-[#3B82F6] cursor-pointer bg-[#0D1117]"
              whileHover={{
                backgroundColor: "#1E293B",
                boxShadow: "0px 0px 4px #3B82F6",
                color: "white",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => VerticalScroll(contactref)}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
