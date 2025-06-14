const Card = ({ title, points }) => (
  <div className="bg-[#1a1a1a] rounded-[40px] px-4 py-5 sm:px-6 sm:py-6 w-full flex flex-col h-full">
    <h1 className="text-[24px] sm:text-[26px] lg:text-[30px] font-bold leading-tight mb-4 break-words" style={{color :'#FFDD02'}}>
      {title}
    </h1>
    <ol className="list-decimal pl-5 space-y-2 text-[14px] sm:text-[15px] font-light leading-[1.6] tracking-wide text-[#cccccc]">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ol>
  </div>
);

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
      title: "We proudly power our home with solar energy",
      points: [
        "Our home runs on the endless power of the sun — clean, sustainable, and future-ready.",
        "Harnessing the sun’s energy, we’ve made our home smarter, greener, and eco-friendly.",
        "Powered by the sun, lighting up our lives responsibly.",
      ],
    },
    {
      title: "We proudly power our home with solar energy",
      points: [
        "Our home runs on the endless power of the sun — clean, sustainable, and future-ready.",
        "Harnessing the sun’s energy, we’ve made our home smarter, greener, and eco-friendly.",
        "Powered by the sun, lighting up our lives responsibly.",
      ],
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 ">
      {cardData.map((card, index) => (
        <div key={index} className="w-full sm:w-[48%] lg:w-[31%]">
          <Card title={card.title} points={card.points} />
        </div>
      ))}
    </div>
  );
};

export default SolarCard;
