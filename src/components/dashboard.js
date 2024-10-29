// src/components/Dashboard.js
import React from "react";
import { useLocation } from "react-router-dom";
const Dashboard = ({params}) => {
    const location = useLocation()
  return (
    <main className="flex-1 p-6 overflow-auto">
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Card 1</h2>
          <p className="mt-2 text-gray-500">This is some information.</p>
          <h2 className="text-lg font-semibold text-gray-700">Card 1</h2>
          <p className="mt-2 text-gray-500">This is some information.</p>
          <h2 className="text-lg font-semibold text-gray-700">Card 1</h2>
          <p className="mt-2 text-gray-500">This is some information.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Card 2</h2>
          <p className="mt-2 text-gray-500">This is some more information.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Card 3</h2>
          <p className="mt-2 text-gray-500">This is even more information.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Card 4</h2>
          <p className="mt-2 text-gray-500">This is even more information.</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Card 1</h2>
          <p className="mt-2 text-gray-500">This is some information.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Card 2</h2>
          <p className="mt-2 text-gray-500">This is some more information.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Card 3</h2>
          <p className="mt-2 text-gray-500">This is even more information.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Card 4</h2>
          <p className="mt-2 text-gray-500">This is even more information.</p>
        </div>
      </div>
    
    </main>
  );
};

export default Dashboard;
