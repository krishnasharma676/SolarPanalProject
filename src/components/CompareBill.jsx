import billChart from '../assets/chart-1.png';

const CompareBill = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-8">
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={billChart}
          alt="Bill Chart"
          className="w-[702px] h-[355px] rounded-xl object-cover"
        />
      </div>


      <div className="w-full lg:w-1/2 text-white text-left max-w-[500px] relative top-[45px]">
        <h2 className="text-[48px]  font-bold leading-tight mb-4">
          Compare your <span style={{color :'#FFDD02'}}>bill</span> <br /> with the chart.
        </h2>
        <p className="text-gray-400 text-[17px] leading-relaxed">
          Compare your bill with the chart to check if all the charges and amounts are correct.
          This helps ensure transparency and lets you easily identify any errors or differences in billing.
        </p>
      </div>
    </section>
  );
};

export default CompareBill;
