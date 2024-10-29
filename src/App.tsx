import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/sideBar";
import Topbar from "./components/topBar";
import Dashboard from "./components/dashboard";
import CurrentRoute from "./components/currentRoute";

function App() {
  const location = useLocation(); // Track route changes

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <div className="p-4 overflow-auto">
          {/* Display the current route at the top of the layout */}
          <CurrentRoute currentRoute={location.pathname} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/overview" element={<Dashboard />} />
            <Route path="/reports" element={<Dashboard />} />
            <Route path="/analytics" element={<Dashboard />} />
            <Route path="/settings" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
