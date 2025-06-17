import { FaArrowRight, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const questions = [
  "What is your monthly electricity bill?",
  "How many members live in your house?",
  "Do you have access to a shadow-free rooftop?",
  "What is the approximate area of your rooftop (in sq. ft)?",
  "Are you planning to use solar for home or commercial use?",
  "Do you have any idea about your current electricity consumption (kWh)?",
  "Are you looking for an on-grid or off-grid system?",
  "Do you already have any solar setup installed?",
  "Are you interested in financing options?",
  "When are you planning to install the solar panel?",
];

const Modal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    onClose();
    navigate("/dashboard");
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#00000070] backdrop-blur-md flex items-center justify-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-3xl bg-[#1f1f1f] rounded-2xl border border-gray-700 shadow-xl overflow-hidden text-white"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-red-400 text-xl"
        >
          <FaTimes />
        </button>

        <div className="overflow-y-auto max-h-[90vh] p-8 pt-16 space-y-6">
          <h2 className="text-xl font-bold mb-4 text-green-400">
            Solar Installation - Pre Assessment
          </h2>
          {questions.map((q, index) => (
            <div key={index}>
              <label className="block text-sm text-white/70 mb-1">
                {index + 1}. {q}
              </label>
              <input
                type="text"
                placeholder="Your answer..."
                className="w-full p-3 text-sm rounded-md bg-[#2d2d2d] border border-gray-600 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          ))}

          <div className="flex justify-center mt-6">
            <button
              onClick={handleSubmit}
              className="bg-green-400 hover:bg-yellow-400 text-black font-semibold py-3 px-10 rounded-full transition flex items-center gap-2"
            >
              Proceed <FaArrowRight />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
