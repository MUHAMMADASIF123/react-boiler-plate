// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-52 bg-gray-800 text-white h-full">
      <div className="p-6 text-2xl font-semibold text-center">Dashboard</div>
      <nav className="mt-10">
        <Link to="/overview" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Overview
        </Link>
        <Link to="/reports" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Reports
        </Link>
        <Link to="/analytics" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Analytics
        </Link>
        <Link to="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
