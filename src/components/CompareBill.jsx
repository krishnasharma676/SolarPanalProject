import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import billChart from "../assets/chart-1.png";

const CompareBill = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={controls}
      className="flex flex-col lg:flex-row items-center justify-between gap-8"
    >
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={billChart}
          alt="Bill Chart"
          className="w-[702px] h-[355px] rounded-xl object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 text-white-theme text-left max-w-[500px] relative top-[45px]">
        <h2 className="text-[48px] font-bold leading-tight mb-4">
          Compare your <span className="text-yellow-theme">bill</span>
          <br /> with the chart.
        </h2>
        <p className="text-para text-[17px] leading-relaxed">
          Compare your bill with the chart to check if all the charges and amounts are correct.
          This helps ensure transparency and lets you easily identify any errors or differences in billing.
        </p>
      </div>
    </motion.section>
  );
};

export default CompareBill;
