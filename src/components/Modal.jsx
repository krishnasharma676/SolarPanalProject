import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

const Modal = ({ onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 w-full h-full bg-[#00000061] backdrop-blur-md flex items-center justify-center"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="w-full h-full max-w-full max-h-full flex items-center justify-center p-4">
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md bg-[rgba(31,31,31,0.8)] rounded-2xl p-8 text-white shadow-xl border border-gray-700 backdrop-blur-sm"
        >
          <h2 className="text-sm font-semibold tracking-widest text-white/80 mb-1">
            INDIA'S FIRST SOLAR
          </h2>
          <h2 className="text-sm font-semibold tracking-widest text-white/80 mb-4">
            CALCULATOR
          </h2>
          <p className="text-xs text-white/60 mb-1">
            FIRST OFF, FROM WHO OR HOW DID YOU HEAR ABOUT US?
          </p>
          <p className="text-xs text-white/60 mb-4">
            SO WE KNOW WHO TO THANK! (A FRIEND'S NAME, SOCIAL MEDIA, ETC...)
          </p>
          <input
            type="text"
            placeholder="TYPE HERE ..."
            className="w-full p-2 text-sm rounded-md bg-[#2d2d2d] border border-gray-600 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={onClose}
            className="mt-4 bg-green-400 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full transition flex items-center justify-center gap-2"
          >
            <FaArrowRight />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Modal;
