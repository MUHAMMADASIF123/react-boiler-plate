// src/components/Topbar.js
import React from "react";

const Topbar = () => {
  return (
    <header className="w-full bg-white shadow p-4 flex items-center justify-between">
      <div className="text-xl font-semibold">Dashboard</div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 focus:outline-none">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 4a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
          </svg>
        </button>
        <div className="w-10 h-10 rounded-full bg-gray-200" />
      </div>
    </header>
  );
};

export default Topbar;
