import chart2 from "../assets/chart-2.png";
import chart3 from "../assets/chart-3.png";
import chart4 from "../assets/chart-4.png";
import lineChart from "../assets/line-chart.png";
import circleChart from "../assets/circle-chart.png";

const ChartSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <div className="rounded-xl flex justify-center items-center">
          <img
            src={chart2}
            alt="Chart 1"
            className="rounded-[20px] border-2 border-[#FFFFFF5C] w-full h-full object-cover"
          />
        </div>

        <div className="rounded-xl flex justify-center items-center">
          <img
            src={chart3}
            alt="Chart 2"
            className="rounded-[20px] border-2 border-[#FFFFFF5C] w-full h-full object-cover"
          />
        </div>

        <div className="rounded-xl flex justify-center items-center">
          <img
            src={chart4}
            alt="Chart 3"
            className=" w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-10">
        <div className="flex justify-center items-center">
          <img
            src={lineChart}
            alt="Chart 4"
            className="rounded-[20px] border-2 border-[#FFFFFF5C] w-full h-full object-cover"
          />
        </div>

        <div className="flex justify-center items-center">
          <img
            src={circleChart}
            alt="Chart 5"
            className="rounded-[20px] border-2 border-[#FFFFFF5C] w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default ChartSection;
