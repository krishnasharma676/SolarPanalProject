import icon1 from '../assets/animation-1.gif';
import icon2 from '../assets/animation-2.gif';
import icon3 from '../assets/animation-3.gif';

const SaveEarth = () => {
  const icons = [icon1, icon2, icon3];

  return (
    <section className="text-center">
      <h2 className="text-white text-[32px] sm:text-[40px] lg:text-[48px] leading-[126%] font-bold mb-8">
        Save The <span className="text-green-500">Earth</span> Planet
      </h2>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="bg-white rounded-full w-[140px] sm:w-[180px] md:w-[218px] aspect-square flex items-center justify-center shadow-md overflow-hidden"
          >
            <img
              src={icon}
              alt={`icon-${index}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SaveEarth;
