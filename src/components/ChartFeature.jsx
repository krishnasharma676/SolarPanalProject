import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import chart from "../assets/chart-6.gif";

const ChartFeature = () => {
  const imageControls = useAnimation();
  const textControls = useAnimation();

  const [imageRef, imageInView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const [textRef, textInView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (imageInView) imageControls.start("visible");
    if (textInView) textControls.start("visible");
  }, [imageInView, textInView, imageControls, textControls]);

  const imageVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10 w-full">
      {/* Left: Chart Image (50%) */}
      <motion.div
        ref={imageRef}
        variants={imageVariant}
        initial="hidden"
        animate={imageControls}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src={chart}
          alt="Chart"
          className="w-full max-w-[550px] h-auto rounded-[40px] object-contain"
        />
      </motion.div>

      {/* Right: Text Section (50%) */}
      <motion.div
        ref={textRef}
        variants={textVariant}
        initial="hidden"
        animate={textControls}
        className="w-full md:w-1/2 flex flex-col justify-end md:text-left"
      >
        <p className="text-para text-[15px] sm:text-[16px] lg:text-[17px] font-normal leading-[1.6] mb-4">
          Compare your bill with the chart to check if all the charges and amounts are correct. This helps ensure transparency and lets you easily identify any errors or differences in billing.
        </p>
        <h2 className="text-white-theme text-[28px] sm:text-[32px] lg:text-[38px] font-bold leading-tight">
          We make it easy to engage consumers like a{" "}
          <span className="text-yellow-theme">trusted friend</span>
        </h2>
      </motion.div>
    </div>
  );
};

export default ChartFeature;
