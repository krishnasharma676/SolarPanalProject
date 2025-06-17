import { useState, useEffect } from "react";
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
    <>
      <div
        className={
          isModalOpen
            ? "blur-sm pointer-events-none select-none transition-all"
            : ""
        }
      >
        <Banner onCalculateClick={handleOpenModal} />
        <Container><CompareBill /></Container>
        <Container><SolarCard /></Container>
        <Container><ChartSection /></Container>
        <Container><ChartFeature /></Container>
        <Container><SolarPanal /></Container>
        <Container><SaveEarth /></Container>
        <SocialFollow />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && <Modal onClose={handleCloseModal} />}
      </AnimatePresence>
    </>
  );
}

export default App;
