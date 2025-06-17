import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import chart2 from "../assets/chart-2.png";
import chart3 from "../assets/chart-3.png";
import chart4 from "../assets/chart-4.png";
import lineChart from "../assets/line-chart.png";
import circleChart from "../assets/circle-chart.png";

// Animation variants
const animationVariants = [
  {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  },
  {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
];

const AnimatedChart = ({ src, alt, index, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const variant = animationVariants[index % animationVariants.length];

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={controls}
      className={`rounded-xl flex justify-center items-center ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="rounded-[20px] border-2 border-[#FFFFFF5C] w-full h-full object-cover"
      />
    </motion.div>
  );
};

const ChartSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <AnimatedChart src={chart2} alt="Chart 1" index={0} />
        <AnimatedChart src={chart3} alt="Chart 2" index={1} />
        <AnimatedChart src={chart4} alt="Chart 3" index={2} className="border-none" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-10">
        <AnimatedChart src={lineChart} alt="Chart 4" index={3} />
        <AnimatedChart src={circleChart} alt="Chart 5" index={4} />
      </div>
    </>
  );
};

export default ChartSection;
