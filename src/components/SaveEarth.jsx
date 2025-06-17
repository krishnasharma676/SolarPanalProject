import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import icon1 from "../assets/animation-1.gif";
import icon2 from "../assets/animation-2.gif";
import icon3 from "../assets/animation-3.gif";

const SaveEarth = () => {
  const icons = [icon1, icon2, icon3];

  const headingControls = useAnimation();
  const [headingRef, headingInView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (headingInView) headingControls.start("visible");
  }, [headingInView, headingControls]);

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const iconVariants = [
    {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
    },
    {
      hidden: { scale: 0.7, opacity: 0 },
      visible: { scale: 1, opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
    },
    {
      hidden: { opacity: 0, rotate: -10 },
      visible: { opacity: 1, rotate: 0, transition: { duration: 0.6, delay: 0.3 } },
    },
  ];

  return (
    <section className="text-center">
      <motion.h2
        ref={headingRef}
        variants={headingVariants}
        initial="hidden"
        animate={headingControls}
        className="text-white text-[32px] sm:text-[40px] lg:text-[48px] leading-[126%] font-bold mb-8"
      >
        Save The <span className="text-green-theme">Earth</span> Planet
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {icons.map((icon, index) => {
          const controls = useAnimation();
          const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

          useEffect(() => {
            if (inView) controls.start("visible");
          }, [inView, controls]);

          return (
            <motion.div
              key={index}
              ref={ref}
              variants={iconVariants[index % iconVariants.length]}
              initial="hidden"
              animate={controls}
              className="bg-white rounded-full w-[140px] sm:w-[180px] md:w-[218px] aspect-square flex items-center justify-center shadow-md overflow-hidden"
            >
              <img
                src={icon}
                alt={`icon-${index}`}
                className="w-full h-full object-contain"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SaveEarth;
