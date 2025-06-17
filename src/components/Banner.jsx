import { motion } from "framer-motion";
import building from "../assets/main-screen-image.gif";

const Banner = ({ onCalculateClick }) => {
  return (
    <motion.section
      className="min-h-screen text-center flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.img
        src={building}
        alt="Building"
        className="w-[320px] h-[320px] sm:w-[320px] sm:h-[320px] w-full max-w-[320px] object-contain mb-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />

      <motion.h1
        className="text-white font-bold leading-snug text-[38px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        WELCOME
        <span className="relative w-[1.2em] text-center mx-1">
          <span className="absolute left-[8px] top-[13px] w-[6px] h-[6px] bg-green-400 rounded-full"></span>
          <span className="text-white"> t<span className="ml-1">O</span></span>
          <span className="absolute left-[19px] bottom-[4px] -translate-y-1/2 w-[6px] h-[6px] bg-yellow-400 rounded-full"></span>
        </span>
         HOME <span className="text-green-theme">SOLAR</span>
        <br />
        <span className="tracking-[2.88px]" style={{ color: "#FFDD02" }}>CALCULATE</span>
        {/* <br /> */}
        <span className="tracking-[2.88px]" style={{ color: "#FFDD02" }}> YOUR BILLS</span>
      </motion.h1>

      <motion.button
        onClick={onCalculateClick}
        className="mt-6 text-white-theme font-semibold rounded-[14px] w-full max-w-[323px] h-[59px] bg-light-green cursor-pointer 
        transition-all duration-300 ease-in-out 
        hover:bg-green-700 hover:scale-105 hover:shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        CALCULATE NOW
      </motion.button>
    </motion.section>
  );
};

export default Banner;
