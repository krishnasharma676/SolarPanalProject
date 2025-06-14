import chart from '../assets/chart-6.gif';

const ChartFeature = () => {
  return (
    // <div className="mx-auto px-4 sm:px-6 lg:px-10 py-10">
    // </div>
      <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10 w-full">
        
        {/* Left: Chart Image (50%) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={chart}
            alt="Chart"
            className="w-full max-w-[550px] h-auto rounded-[40px] object-contain"
          />
        </div>

        {/* Right: Text Section (50%) aligned bottom */}
        <div className="w-full md:w-1/2 flex flex-col justify-end md:text-left">
          <p className="text-[#b3b3b3] text-[15px] sm:text-[16px] lg:text-[17px] font-normal leading-[1.6] mb-4">
            Compare your bill with the chart to check if all the charges and amounts are correct. This helps ensure transparency and lets you easily identify any errors or differences in billing.
          </p>
          <h2 className="text-white text-[28px] sm:text-[32px] lg:text-[38px] font-bold leading-tight">
            We make it easy to engage consumers like a <span style={{color :'#FFDD02'}}>trusted friend</span>
          </h2>
        </div>
      </div>
  );
};

export default ChartFeature;
