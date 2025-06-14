import building from '../assets/main-screen-image.gif';

const Banner = ({ onCalculateClick }) => {
  return (
    <section className="min-h-screen text-center flex flex-col items-center justify-center animate-fade-in">
      <img
        src={building}
        alt="Building"
        className="w-[320px] h-[320px] sm:w-[320px] sm:h-[320px] w-full max-w-[320px] object-contain mb-4 animate-fade-in-up"
      />

      <h1 className="text-white font-bold leading-snug text-[38px] animate-fade-in delay-200">
        WELCOME
        <span className="relative w-[1.2em] text-center mx-1">
          <span className="absolute left-[8px] top-[13px] w-[6px] h-[6px] bg-green-400 rounded-full"></span>
          <span className="text-white"> t O</span>
          <span className="absolute left-[19px] bottom-[4px] -translate-y-1/2 w-[6px] h-[6px] bg-yellow-400 rounded-full"></span>
        </span>
        <br />
        HOME <span className="text-green-500">SOLAR</span>
        <br />
        <span className="tracking-[2.88px" style={{ color: '#FFDD02' }}>CALCULATE</span>
        <br />
        <span className="tracking-[2.88px" style={{ color: '#FFDD02' }}>YOUR BILLS</span>
      </h1>

      <button
        onClick={onCalculateClick}
        className="mt-6 text-white font-semibold rounded-[14px] w-full max-w-[323px] h-[59px] bg-green-600 cursor-pointer 
        transition-all duration-300 ease-in-out 
        hover:bg-green-700 hover:scale-105 hover:shadow-lg"
      >
        CALCULATE NOW
      </button>
    </section>
  );
};

export default Banner;
