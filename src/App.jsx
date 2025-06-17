import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import CompareBill from "./components/CompareBill";
import SolarCard from "./components/SolarCard";
import ChartSection from "./components/ChartSection";
import ChartFeature from "./components/ChartFeature";
import SolarPanal from "./components/SolarPanal";
import SaveEarth from "./components/SaveEarth";
import SocialFollow from "./components/SocialFollow";
import Modal from "./components/Modal";
import Container from "./components/Container";
import { AnimatePresence } from "framer-motion";
import Dashboard from "./components/Dashboard";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className={isModalOpen ? "blur-sm pointer-events-none select-none transition-all" : ""}>
              <Banner onCalculateClick={handleOpenModal} />
              <Container><CompareBill /></Container>
              <Container><SolarCard /></Container>
              <Container><ChartSection /></Container>
              <Container><ChartFeature /></Container>
              <Container><SolarPanal /></Container>
              <Container><SaveEarth /></Container>
              <SocialFollow />
            </div>
            <AnimatePresence>
              {isModalOpen && <Modal onClose={handleCloseModal} />}
            </AnimatePresence>
          </>
        }
      />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;

