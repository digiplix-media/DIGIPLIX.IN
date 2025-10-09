import React, { useState } from "react";

const DevelopmentBanner = () => {
  const [isVisible, ] = useState(true);

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop blocks interaction */}
      <div
        className="fixed inset-0 bg-black opacity-90 backdrop-blur-sm z-[999]"
      />

      {/* Centered Banner Box */}
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   bg-white text-gray-800 max-w-md w-11/12 p-6 rounded-lg shadow-lg
                   z-[1000] pointer-events-auto text-center font-roboto"
      >
        <h2 className="mb-3 text-2xl text-blue-700 font-semibold tracking-wide">Site Under Development</h2>
        <p className="mb-5 text-base leading-relaxed">
          We’re working on improvements and a fresh look is coming soon.<br />
          Thank you for your patience!
        </p>
        

        {/* Uncomment this button if you want a dismiss option */}
        {/* <button
          onClick={() => setIsVisible(false)}
          className="px-5 py-2 bg-blue-600 text-white rounded-md text-lg
                     hover:bg-blue-700 transition-colors duration-300"
        >
          Dismiss
        </button> */}
      </div>
    </>
  );
};

export default DevelopmentBanner;
