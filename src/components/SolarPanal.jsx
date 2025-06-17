import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import PanalImage from "../assets/panal-image.png";

const SolarPanal = () => {
  const imageControls = useAnimation();
  const textControls = useAnimation();

  const [imageRef, imageInView] = useInView({ threshold: 0.3, triggerOnce: false });
  const [textRef, textInView] = useInView({ threshold: 0.3, triggerOnce: false });

  useEffect(() => {
    if (imageInView) imageControls.start("visible");
    if (textInView) textControls.start("visible");
  }, [imageInView, textInView, imageControls, textControls]);

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 w-full">
      {/* Text Section */}
      <motion.div
        ref={textRef}
        variants={textVariants}
        initial="hidden"
        animate={textControls}
        className="max-w-xl mt-0 md:mt-[210px]"
      >
        <p className="text-[#b3b3b3] text-[15px] sm:text-[16px] lg:text-[17px] mb-4">
          Compare your bill with the chart to check if all the charges and amounts are correct. This helps ensure transparency and lets you easily identify any errors or differences in billing.
        </p>
        <h2 className="text-white text-[28px] sm:text-[32px] lg:text-[38px] font-bold leading-tight">
          We make it easy to engage consumers like a{" "}
          <span style={{ color: "#FFDD02" }}>trusted friend</span>
        </h2>
      </motion.div>

      {/* Image Section */}
      <motion.div
        ref={imageRef}
        variants={imageVariants}
        initial="hidden"
        animate={imageControls}
        className="flex justify-center items-center"
      >
        <img
          src={PanalImage}
          alt="Chart"
          className="w-full max-w-[420px] sm:max-w-[520px] md:max-w-[636px] h-auto rounded-[40px] object-contain"
        />
      </motion.div>
    </div>
  );
};

export default SolarPanal;
