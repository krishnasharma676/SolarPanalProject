import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaArrowLeft, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 45 },
  { name: "Mar", value: 60 },
  { name: "Apr", value: 50 },
  { name: "May", value: 70 },
];

const pieData = [
  { name: "Solar", value: 400 },
  { name: "Wind", value: 300 },
  { name: "Hydro", value: 300 },
];

const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
  const navigate = useNavigate();
  const [expandedChart, setExpandedChart] = useState(null);

  const handleChartClick = (id) => {
    setExpandedChart(expandedChart === id ? null : id);
  };

  const ChartCard = ({ id, title, children }) => (
    <div
      onClick={() => handleChartClick(id)}
      className={`bg-[#1f1f1f] p-4 rounded-xl border border-gray-700 transition-transform cursor-pointer relative ${
        expandedChart === id
          ? "scale-[1.02] z-20"
          : "hover:scale-[1.03]"
      }`}
    >
      <h2 className="text-white/70 mb-2 text-sm">{title}</h2>
      <div className="w-full h-[200px] xl:h-[300px]">{children}</div>
      {expandedChart === id && (
        <div className="absolute bottom-4 right-4 text-white text-xs bg-white/10 px-3 py-1 rounded">
          Clicked - Enlarged View
        </div>
      )}
    </div>
  );

  const ChartModal = ({ title, children, onClose }) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#1f1f1f] rounded-xl border border-gray-700 p-6 w-[90%] md:w-[70%] lg:w-[60%] text-white relative"
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-red-400"
            onClick={onClose}
          >
            <FaTimes />
          </button>
          <h2 className="text-lg font-bold mb-4">{title}</h2>
          <div className="h-[300px] md:h-[400px]">{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header with Welcome and Back Button */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold">
            Welcome, <span className="text-green-500">Amish</span>
          </h1>
          <p className="text-sm text-white/70">
            Track your sunlight, power your future — smart solar insights at your fingertips.
          </p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 border border-green-400 text-green-400 rounded hover:bg-green-500 hover:text-black transition"
        >
          <FaArrowLeft />
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
        {[
          { label: "No. of kWh generated for 1 kW system in 30 days", value: "120" },
          { label: "Capacity of Solar System Installed (kW)", value: "8.33" },
          { label: "Capacity of 1 Panel (Watt)", value: "550" },
          { label: "Capacity of 1 Panel (kW)", value: "0.55" },
          { label: "Monthly Savings (%)", value: "28.4%" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-green-900 bg-opacity-10 border border-green-600 p-4 rounded-xl"
          >
            <p className="text-xs text-white/70 mb-2">{item.label}</p>
            <p className="text-2xl font-bold text-green-400">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
        <ChartCard id="line" title="Monthly Production">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#00C49F"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard id="bar" title="Energy Output">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Bar dataKey="value" fill="#FFBB28" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard id="pie" title="Energy Sources">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Modal Popup */}
      {expandedChart === "line" && (
        <ChartModal title="Detailed Monthly Production" onClose={() => setExpandedChart(null)}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#00C49F"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartModal>
      )}

      {expandedChart === "bar" && (
        <ChartModal title="Detailed Energy Output" onClose={() => setExpandedChart(null)}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Bar dataKey="value" fill="#FFBB28" />
            </BarChart>
          </ResponsiveContainer>
        </ChartModal>
      )}

      {expandedChart === "pie" && (
        <ChartModal title="Detailed Energy Sources" onClose={() => setExpandedChart(null)}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartModal>
      )}
    </div>
  );
};

export default Dashboard;
