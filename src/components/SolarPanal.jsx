import PanalImage from '../assets/panal-image.png';

const SolarPanal = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 w-full">
      
      {/* Text Section */}
      <div className="max-w-xl mt-0 md:mt-[210px]">
        <p className="text-[#b3b3b3] text-[15px] sm:text-[16px] lg:text-[17px] mb-4">
          Compare your bill with the chart to check if all the charges and amounts are correct. This helps ensure transparency and lets you easily identify any errors or differences in billing.
        </p>
        <h2 className="text-white text-[28px] sm:text-[32px] lg:text-[38px] font-bold leading-tight">
          We make it easy to engage consumers like a <span style={{color :'#FFDD02'}}>trusted friend</span>
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center">
        <img
          src={PanalImage}
          alt="Chart"
          className="w-full max-w-[420px] sm:max-w-[520px] md:max-w-[636px] h-auto rounded-[40px] object-contain"
        />
      </div>
    </div>
  );
};

export default SolarPanal;
