const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#00000061] backdrop-blur-sm w-full h-full overflow-y-auto">
  <div
    className="w-full h-full text-white p-6 text-left shadow-lg border border-gray-700 animate-scaleUp"
    style={{ backgroundColor: "rgba(31, 31, 31, 0.4)" }}
  >
    <h2 className="text-2xl font-bold mb-4">Calculate Your Bill</h2>
    <p className="text-gray-300 mb-6">This is your transparent popup modal.</p>
    <button
      onClick={onClose}
      className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition-all"
    >
      Close
    </button>
  </div>
</div>

  );
};


export default Modal;
