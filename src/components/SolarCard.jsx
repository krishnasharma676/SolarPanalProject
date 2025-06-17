// SolarCard.jsx
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
];

const Card = ({ title, points, index }) => {
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
      className="bg-[#212121] rounded-[53px] px-4 py-5 sm:px-6 sm:py-6 w-full flex flex-col h-full"
    >
      <h1
        className="text-[24px] sm:text-[26px] lg:text-[30px] font-bold leading-tight mb-4 break-words"
        style={{ color: "#FFDD02" }}
      >
        {title}
      </h1>
      <ol className="list-decimal pl-5 space-y-2 text-[14px] sm:text-[15px] text-para leading-[1.6] tracking-wide text-[#cccccc]">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ol>
    </motion.div>
  );
};

const SolarCard = () => {
  const cardData = [
    {
      title: "We proudly power our home with solar energy",
      points: [
        "Our home runs on the endless power of the sun — clean, sustainable, and future-ready.",
        "Harnessing the sun’s energy, we’ve made our home smarter, greener, and eco-friendly.",
        "Powered by the sun, lighting up our lives responsibly.",
      ],
    },
    {
      title: "Harness the power of solar every day",
      points: [
        "From sunrise to sunset, solar panels keep your home energized.",
        "Slash your electricity bills while saving the planet.",
        "Smart energy choice for smart homes.",
      ],
    },
    {
      title: "Green today, brighter tomorrow",
      points: [
        "Investing in solar is investing in the future.",
        "Make a positive impact on the environment with every ray.",
        "Join the solar revolution—one panel at a time.",
      ],
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10">
      {cardData.map((card, index) => (
        <div key={index} className="w-full sm:w-[48%] lg:w-[31%]">
          <Card title={card.title} points={card.points} index={index} />
        </div>
      ))}
    </div>
  );
};

export default SolarCard;
