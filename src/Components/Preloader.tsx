// Preloader.js
import React from 'react';

const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-16 h-16 rounded-full border-t-4 border-t-Desaturated-Dark-Cyan animate-spin"></div>
    </div>
  );
};

export default Preloader;