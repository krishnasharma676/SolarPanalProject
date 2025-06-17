import React from "react"
import mainScreen from "../assets/main-screen.png"
import blurBottom from "../assets/blur-bottom.png"
import elips from "../assets/elips.png"
import { useNavigate } from "react-router-dom"

const MainScreen = () => {
  const navigate = useNavigate()

  const handleEnterHome = () => {
    navigate("/home")
  }

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden flex items-center justify-center px-4">
      {/* Background Main Image */}
      <img
        src={mainScreen}
        alt="Main Screen"
        className="absolute left-1/2 top-[250px] w-[400px] h-[400px] object-cover pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Blur Effect at Bottom */}
      <img
        src={blurBottom}
        alt="Main Screen Blur"
        className="absolute left-1/2 top-[350px] w-[250px] h-[250px] object-cover z-50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Bottom Glow Ellipse */}
      <img
        src={elips}
        alt="Bottom Glow"
        className="absolute bottom-0 left-0 w-full object-cover pointer-events-none z-0"
      />

      {/* Center Content */}
      <div className="z-99 text-center max-w-xl mt-20">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          India's Solar <span className="text-green-400">JOURNEY</span> Begins Here
        </h1>
        <p className="text-sm md:text-base text-white/80 mt-4 mb-6">
          Meet Gauri, a homeowner just like you, taking a step toward a
          sustainable future. This tool makes it easy to begin your solar
          journey with clarity and confidence.
        </p>
        <button
          onClick={handleEnterHome}
          className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full text-sm font-semibold shadow-lg transition duration-300 ease-in-out hover:scale-105"
        >
          Try Out the Solar Calculator Now
        </button>
      </div>
    </div>
  )
}

export default MainScreen
